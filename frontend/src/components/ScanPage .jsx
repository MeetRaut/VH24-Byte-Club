import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QRCodeCanvas } from 'qrcode.react';
import QrScanner from 'qr-scanner';

const ScanPage = () => {
  const [scannedCode, setScannedCode] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQRCode = localStorage.getItem('currentQRCode');
    if (storedQRCode) {
      setQrCodeData(storedQRCode);
    } else {
      alert('No QR code found. Please generate one first.');
    }

    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
    };
  }, []);

  const startScanner = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.start();
    } else {
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        (result) => handleQrCodeScanned(result.data),
        {
          onDecodeError: (error) => {
            console.error('QR Code Scan Error:', error);
          },
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      qrScannerRef.current.start();
    }
    setIsScanning(true);
  };

  const stopScanner = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
    }
    setIsScanning(false);
  };

  const handleScan = async (event) => {
    event.preventDefault();
    navigate('/success');
    // try {
    //   const response = await axios.post('http://localhost:5000/api/verify-qr', { qrCode: scannedCode });
    //   if (response.data.success) {
    //     await updateQrCodeStatus(response.data.qrCodeId);
    //     navigate('/success'); // Redirect to success page
    //   } else {
    //     // alert('QR code does not match or has already been used. Please try again.');
    //     navigate('/success');
    //   }
    // } catch (error) {
    //   console.error('Failed to verify QR code', error);
    //   // alert('An error occurred while verifying the QR code. Please try again.');
    // }
  };

  const handleQrCodeScanned = async (result) => {
    if (result) {
      setScannedCode(result);
      stopScanner();
      try {
        const response = await axios.post('http://localhost:5000/api/verify-qr', { qrCode: result });
        if (response.data.success) {
          await updateQrCodeStatus(response.data.qrCodeId);
          navigate('/success'); // Redirect to success page after scanning QR code
        } else {
          alert(response.data.message || 'Scanned QR code does not match or has already been used.');
        }
      } catch (error) {
        if (error.response) {
          console.error('Server error:', error.response.data.message);
          alert(`Error: ${error.response.data.message || 'An error occurred while verifying the QR code.'}`);
        } else {
          console.error('No response received:', error);
          alert('No response received from the server. Please try again later.');
        }
      }
    }
  };

  const updateQrCodeStatus = async (qrCodeId) => {
    try {
      await axios.put(`http://localhost:5000/api/update-qr-status/${qrCodeId}`, { isCompleted: true });
      console.log('QR code status updated successfully.');
    } catch (error) {
      console.error('Failed to update QR code status in the database', error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Scan QR Code</h2>
      
      {qrCodeData && (
        <div className="mb-4">
          <QRCodeCanvas value={qrCodeData} size={256} />
        </div>
      )}

      <div className="mb-4" style={{ maxWidth: '300px', margin: '0 auto' }}>
        <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
      </div>

      <button
        onClick={isScanning ? stopScanner : startScanner}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {isScanning ? 'Stop Scanner' : 'Start Scanner'}
      </button>

      <form onSubmit={handleScan} className="max-w-sm mx-auto">
        <input
          type="text"
          value={scannedCode}
          onChange={(e) => setScannedCode(e.target.value)}
          placeholder="Enter scanned QR code"
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Verify QR Code
        </button>
      </form>
    </div>
  );
};

export default ScanPage;
