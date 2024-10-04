import React, { useState } from 'react';

const DonationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const openModal = (institute) => {
    setSelectedInstitute(institute);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedInstitute(null);
  };

  const donationRequirements = [
    {
      id: 1,
      name: 'Sunshine Orphanage',
      description: 'In need of food and clothing donations for 30 children.',
    },
    {
      id: 2,
      name: 'Elderly Care Home',
      description: 'Seeking donations for medical supplies and daily groceries.',
    },
    {
      id: 3,
      name: 'Helping Hands Shelter',
      description: 'Requires bedding and hygiene products for 20 people.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f7f7', padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Donation Requirements</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {donationRequirements.map((institute) => (
            <div
              key={institute.id}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onClick={() => openModal(institute)}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{institute.name}</h3>
              <p style={{ color: '#666' }}>{institute.description}</p>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedInstitute && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              Donate to {selectedInstitute.name}
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              {selectedInstitute.description}
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div>
                <label htmlFor="amount" style={{ display: 'block', marginBottom: '.5rem' }}>Donation Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter donation amount"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  backgroundColor: '#FF5722',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '1rem',
                }}
              >
                Donate
              </button>
            </form>

            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
