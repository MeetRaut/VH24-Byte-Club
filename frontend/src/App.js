
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUpIn from "./Pages/SignInUp";
import Aboutus from "./Pages/About";
import InstituteSignUp from "./Pages/InstituteSignUp";
import InstituteLogin from "./Pages/InstituteLogin";
import VolunteerSignUp from "./Pages/VolunteerSignUp";
import VolunteerLogin from "./Pages/VolunteerLogin";
import ContactUs from "./Pages/ContactUs";
import DonationPage from "./Pages/DonationPage";
import PostRequestPage from "./Pages/PostRequestPage";
import AdminPage from "./Pages/Admin";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<Aboutus />} />
      <Route path="/Contact" element={<ContactUs />} />
      
      {/* Institute paths */}
      <Route path="/Institute/InstituteSignUp" element={<InstituteSignUp />} />
      <Route path="/Institute/InstituteLogin" element={<InstituteLogin />} />
      <Route path="/Institute/PostRequestPage" element={<PostRequestPage />} />
      {/* Institute paths */}

      {/* Volunteer paths */}
      <Route path="/Volunteer/VolunteerSignIn" element={<VolunteerSignUp />} />
      <Route path="/Volunteer/VolunteerLogin" element={<VolunteerLogin />} />
      <Route path="/Volunteer/DonationPage" element={<DonationPage />} />
      {/* Volunteer paths */}
      
      {/* Admin Path */}
      <Route path="/AdminPage" element={<AdminPage />} />
      {/* Admin Path */}
      <Route path="/SignInUp" element={<SignUpIn />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
