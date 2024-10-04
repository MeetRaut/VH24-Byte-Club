import React, { useState } from 'react';
import UserDonations from '../AdminComponents/UserDonations';
import InstituteRequirements from '../AdminComponents/InstituteReq';
import MapComponent from '../AdminComponents/Map';

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState('donations');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'donations':
        return <UserDonations />;
      case 'requirements':
        return <InstituteRequirements />;
      case 'map':
        return <MapComponent />;
      default:
        return null;
    }
  };

  const handleDropdownChange = (event) => {
    setActiveComponent(event.target.value);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <nav style={{
        backgroundColor: '#FF5722',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '75vw',
        margin: '0 auto',
      }}>
        <select 
          value={activeComponent} 
          onChange={handleDropdownChange} 
          style={{
            backgroundColor: '#fff', // Set a contrasting background color
            border: 'none',
            color: '#333', // Set a contrasting text color
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '1rem',
            marginLeft: '1rem', 
            padding: '0.5rem', // Add padding for better appearance
            borderRadius: '4px', // Optional: add border radius
          }}
        >
          <option value="Users">Total Users</option>
          <option value="Institutes">Total Institutes</option>
          <option value="donations">User Donations</option>
          <option value="requirements">Institute Requirements</option>
        </select>

        <button onClick={() => setActiveComponent('Shop')} style={{ ...navButtonStyle, marginLeft: '1rem' }}>
          Shop Recommender
        </button>
        
        <button onClick={() => setActiveComponent('map')} style={{ ...navButtonStyle, marginLeft: '1rem' }}>
          Map
        </button>
      </nav>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

const navButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default AdminPage;
