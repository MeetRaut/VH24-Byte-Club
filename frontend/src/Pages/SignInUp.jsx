import React from 'react';
import '../Styles/SignUpIn.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png'; 
import Institute from '../Images/Institute.jpg'

const SignUpIn = () => {
  return (
    <>
      <div className="contain">
        <div className="container">
          <img src={Institute} alt="Institute" className="h-[30vh] w-auto" />
          <span className="text-2xl font-bold text-gray-800">Samuhik Seva</span>
          <h2>Access Institute Portal</h2>
          <p>
            Join our mission to transform lives and build a better future. Log in to access essential resources, monitor initiatives, and collaborate with a global network of changemakers working towards a more just and sustainable world.
          </p>
          <Link to={'/Institute/InstituteSignUp'}>
            <button className='btn1'>SignUp & Assign</button>
          </Link>
          <br/>
          Already have an account <Link to={'/Institute/InstituteLogin'} style={{ fontWeight: '100' }}>
            Login & Assign
          </Link>
        </div>

        <div className="container">
          <img src={Logo} alt="Samuhik Seva Logo" className="h-[30vh] w-auto" />
          <span className="text-2xl font-bold text-gray-800">Samuhik Seva</span>
          <h2>Volunteer with Us</h2>
          <p>
            Join over 1 million volunteers, participate and complete the task. We are changemakers who change society 1% at a time. <br />Join today.
          </p>
          <Link to={'/Volunteer/VolunteerSignIn'}>
            <button className="btn2">SignUp & Participate</button>
          </Link>
          <br/>
          Already have an account <Link to={'/Volunteer/VolunteerLogin'} style={{ fontWeight: '100' }}>
            Login & Assign
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpIn;
