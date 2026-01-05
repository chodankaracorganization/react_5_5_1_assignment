"use client";

import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    console.log(data);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <div className="mb-6">
          <label
            htmlFor="_name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            id="_name"
            name="name"
            type="text"
            value={name}
            onChange={() => setName(event.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="_email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="_email"
            name="email"
            type="email"
            value={email}
            onChange={() => setEmail(event.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="_message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="_message"
            name="message"
            value={message}
            onChange={() => setMessage(event.target.value)}
            rows="5"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default ContactPage;


