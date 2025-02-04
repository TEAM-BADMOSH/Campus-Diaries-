import React from "react";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Page Title */}
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        {/* Form */}
        <form>
          {/* Name Field */}
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:bg-gradient-to-r transition duration-200 hover:from-blue-600 hover:to-purple-700"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
