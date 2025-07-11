import React, { useState } from 'react';
import { Card, Button, Input } from '../components/ui';
import { Alert } from '../components/ui';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      if (email === 'user@example.com') {
        throw new Error('Email sudah terdaftar');
      }
      
      // Successful registration
      // In a real app, this would be handled by AuthContext
      console.log('Registration successful');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mendaftar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Daftar</h2>
        
        {error && (
          <Alert type="error" message={error} className="mb-4" />
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Nama Lengkap"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
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
          
          <div className="mb-4">
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
            <Input
              label="Konfirmasi Password"
              type="password"
              placeholder="Konfirmasi password Anda"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Saya setuju dengan <a href="#" className="text-blue-600 hover:text-blue-800">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-600 hover:text-blue-800">Kebijakan Privasi</a>
              </label>
            </div>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            loading={loading}
          >
            Daftar
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Login sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;