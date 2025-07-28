// src/components/auth/RegisterForm.jsx
import React, { useState } from 'react';
import { registerUser  } from '../../api/auth';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser ({ username, password });
      // Redirect to login or show success message
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
