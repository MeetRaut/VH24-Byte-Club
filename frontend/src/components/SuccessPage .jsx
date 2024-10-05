// ./components/SuccessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Delivery Successful!</h2>
      <p className="mb-4">Payment will be initiated soon.</p>
      <button 
        onClick={handleGoHome} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
