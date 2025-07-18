import React, { useState } from 'react';
import { Card, Button, Input } from '../components/ui';
import { Alert } from '../components/ui';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      if (email === 'admin@example.com' && password === 'password') {
        // Successful login
        // In a real app, this would be handled by AuthContext
        console.log('Login successful');
      } else {
        setError('Email atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {error && (
          <Alert type="error" message={error} className="mb-4" />
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Ingat saya
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Lupa password?
            </a>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            loading={loading}
          >
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Belum punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Daftar sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;