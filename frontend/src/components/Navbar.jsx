import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from '../Images/Logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <img src={Image} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-800">Samuhik Seva</span>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </Link>
                <Link
                  to="/Institute/PostRequestPage"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Post Request
                </Link>

                <Link
                  to="/Volunteer/DonationPage"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Donate
                </Link>
                
                <Link
                  to="/"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Membership
                </Link>
                <Link
                  to="/Contact"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </Link>
                
              </div>
            </div>
          </div>

          <Link to="/SignInUp">
            <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl text-lg font-medium">
              Sign In
            </div>
          </Link>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              <Link
                to="/"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Funding
              </Link>
              <Link
                to="/About"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Membership
              </Link>
              <Link
                to="/"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </Link>
              <Link
                to="/SignInUp"
                className="hover:bg-primary-base bg-button-primary text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
