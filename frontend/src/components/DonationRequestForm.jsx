import React, { useState } from 'react';

const DonationRequestForm = ({ onSubmit }) => {
  const [institute, setInstitute] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(institute);
    setInstitute(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Create Donation Request</h2>
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
        Create Donation Request
      </button>
    </form>
  );
};

export default DonationRequestForm;