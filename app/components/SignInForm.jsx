'use client';

import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-gray-100" style={{ backgroundImage: "url('/images/imageSignIn.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '80vw', height: '80vh' }}>
        <div className="bg-green-950 p-8 rounded shadow-md w-full max-w-md bg-opacity-70">
          <h2 className="text-2xl font-bold mb-6 text-center text-white font-livvic">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-livvic">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white font-livvic">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white p-2 font-livvic rounded hover:bg-green-900"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-white font-livvic">
              Not a member? Create an account here
              {/* ska vara en router länk*/}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SignInForm;