import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Register
        </h2>
        <p className="text-gray-600 mb-6">
          Bergabunglah dengan kami dengan mendaftarkan akun baru
        </p>
        <form className="space-y-4">
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md w-full"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Sudah punya akun?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
