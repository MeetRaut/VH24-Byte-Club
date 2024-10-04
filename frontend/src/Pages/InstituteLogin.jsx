import React from 'react';
import { Link } from 'react-router-dom';

const InstituteLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Institute Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?
          <Link to="/Institute/InstituteSignUp" className="text-orange-600 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default InstituteLogin;
