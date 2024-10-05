// ./components/CreateDonationRequest.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateDonationRequest = () => {
  const [institute, setInstitute] = useState('');
  const navigate = useNavigate();

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/donation-requests', { institute });
      const { qrCodeImage, qrCodeData } = response.data;

      console.log('QR code generated:', qrCodeData);

      
      navigate('/scan');
    } catch (error) {
      console.error('Failed to create donation request', error);
      alert('Failed to create donation request. Please try again.');
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Create Donation Request</h2>
      <form onSubmit={handleCreateRequest} className="max-w-sm mx-auto">
        <input
          type="text"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          placeholder="Enter Institute Name"
          required
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Request
        </button>
      </form>
    </div>
  );
};

export default CreateDonationRequest;
