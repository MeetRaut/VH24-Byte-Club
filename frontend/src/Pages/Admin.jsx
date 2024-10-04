import React, { useState } from 'react';
import UserDonations from '../AdminComponents/UserDonations';
import InstituteRequirements from '../AdminComponents/InstituteReq';
import MapComponent from './NGOMap';
import OrphanageMap from './Orphanage';
const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState('donations');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'donations':
        return <UserDonations />;
      case 'requirements':
        return <InstituteRequirements />;
      case 'NGO':
        
        return <MapComponent/>
      case 'Orphanage':
        return <OrphanageMap />;
        
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
            backgroundColor: '#fff', 
            border: 'none',
            color: '#333', 
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '1rem',
            marginLeft: '1rem', 
            padding: '0.5rem', 
            borderRadius: '4px', 
          }}
        >
          <option value="Users">Total Users</option>
          <option value="Institutes">Total Institutes</option>
          <option value="donations">User Donations</option>
          <option value="requirements">Institute Requirements</option>
        </select>

        <button onClick={() => setActiveComponent('Shop')} style={{ ...navButtonStyle,marginLeft:'1rem', marginRight: '2rem' }}>
          Shop Recommender
        </button>
        
        <select 
          value={activeComponent} 
          onChange={handleDropdownChange} 
          style={{
            backgroundColor: '#fff', 
            border: 'none',
            color: '#333', 
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '1rem',
            marginLeft: '1rem', 
            padding: '0.5rem', 
            borderRadius: '4px', 
          }}
        >
          <option value="NGO">NGO Map</option>
          <option value="Orphanage">Orphanage</option>
        </select>
        <button onClick={() => setActiveComponent('Forecast')} style={{ ...navButtonStyle, marginRight: '2rem' }}>
          Forecast
        </button>
        <button onClick={() => setActiveComponent('Purchase')} style={{ ...navButtonStyle, marginRight: '2rem' }}>
          Purchase
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
