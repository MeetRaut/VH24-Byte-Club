import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DonationRequestForm from './DonationRequestForm';

const HomePage = () => {
  const [donationRequests, setDonationRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDonationRequests();
  }, []);

  const fetchDonationRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donation-requests');
      setDonationRequests(response.data);
    } catch (error) {
      console.error('Failed to fetch donation requests', error);
    }
  };

  const handleDonationComplete = async (id) => {
    try {
      // Verify the QR code first
      const response = await axios.post('http://localhost:5000/api/verify-qr', { qrCode: id });

      if (response.data.success) {
        alert('Donation completed successfully! Order placed to the shop.');
        navigate('/scan');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to complete donation', error);
      alert('Failed to complete donation. Please try again.');
    }
  };

  const handleNewDonationRequest = async (institute) => {
    try {
      await axios.post('http://localhost:5000/api/donation-requests', { institute });
      fetchDonationRequests(); // Refresh the list after adding a new request
    } catch (error) {
      console.error('Failed to create donation request', error);
      alert('Failed to create donation request. Please try again.');
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Donation Requests</h2>
      <DonationRequestForm onSubmit={handleNewDonationRequest} />
      {donationRequests.map((request) => (
        <div key={request._id} className="mb-4 p-4 border rounded">
          <p className="mb-2">Donation request for {request.institute}</p>
          <button
            onClick={() => handleDonationComplete(request.qrCode)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Complete Donation
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;