import React from 'react';
import Image from '../Images/About.jpg'
import i1 from '../Images/Aboutpfp.jpg'


const teamMembers = [
  {
    name: 'Jethalal',
    role: 'Founder & CEO',
    imgUrl: './src/assets/person.png',
  },
  {
    name: 'Bagha',
    role: 'Community Outreach Specialist',
    imgUrl: './src/assets/person.png',
  },
  {
    name: 'Nattu',
    role: 'Lead Data Scientist',
    imgUrl: './src/assets/person.png',
  },
  {
    name: 'Babita',
    role: 'Marketing & Partnerships Manager',
    imgUrl: './src/assets/person.png',
  },
];

const Aboutus = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: '#f9f9f9',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            About Us
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '40px' }}>
            Connecting Donors with Needy Institutions
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ width: '50%', padding: '20px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '600',
                marginBottom: '15px',
              }}
            >
              Welcome to Samuhik Seva
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              At Samuhik Seva, we are dedicated to bridging the gap between donors and institutions like orphanages, elderly homes, and other needy communities. Our platform enables donors to contribute essential groceries and supplies, ensuring that every contribution reaches the right hands.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              We aim to create a transparent and efficient donation system, where individuals and organizations can provide meaningful support without direct money transfers. With our real-time tracking and distribution system, we ensure that every item donated is used effectively.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Join us in making a difference by helping those in need with essential goods and services.
            </p>
          </div>

          <div style={{ width: '50%', padding: '20px' }}>
            <img
              src={Image}
              alt="Supporting Communities"
              style={{
                width: '100%',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#fff',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          Meet Our Team
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                width: '250px',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
              }}
            >
              <img
                src={i1}
                alt={member.name}
                style={{
                  width: '100%',
                  borderRadius: '50%',
                  marginBottom: '15px',
                }}
              />
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                {member.name}
              </h3>
              <p style={{ fontSize: '16px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
};

export default Aboutus;
