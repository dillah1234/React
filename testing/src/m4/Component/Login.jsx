import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Login
        </h2>
        <p className="text-gray-600 mb-6">
          selamat datang di website kami
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
              placeholder="Fill The Username"
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
              placeholder="Fill The Password"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md w-full"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            belum punya akun?{' '}
            <a href="/register" className="text-blue-600 font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
