// React Component: CustomLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContex/AuthContex";

export default function CustomLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUserDetails } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include", // Include cookies for session management
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        setTimeout(async () => {
          await fetchUserDetails(); // Call function to fetch user details after login
          navigate("/home"); // Redirect to protected route
        }, 500);
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r bg-gray-800 text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
