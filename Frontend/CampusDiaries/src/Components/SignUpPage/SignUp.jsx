import React, { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
