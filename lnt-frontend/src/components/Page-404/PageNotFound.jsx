// App.js
import React from "react";
import { NavLink } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-green-400">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-2">Oops! Page not found.</h2>
        <h1 className="text-9xl font-extrabold mb-4 text-transparent bg-center bg-cover bg-no-repeat bg-black bg-clip-text">
          404
        </h1>
        <p className="text-lg mb-6">
          We can't find the page you're looking for.
        </p>
        <NavLink
          to="/"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-custom-blue text-white text-lg font-semibold uppercase rounded-full transition duration-300 ease-in-out"
        >
          Go back home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFoundPage;
