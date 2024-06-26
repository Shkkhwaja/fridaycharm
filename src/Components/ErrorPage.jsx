import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p className="text-lg my-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
