import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface PasswordLoginFormProps {
  email: string;
  password: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordLoginForm({ email, password, handleInputChange }: PasswordLoginFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            className="input-field pl-10"
            placeholder="you@example.com"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            name="password"
            className="input-field pl-10"
            placeholder="Enter your password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <button type="button" className="text-sm text-teal-600 hover:text-teal-700">
          Forgot password?
        </button>
      </div>
      <button type="submit" className="btn-primary w-full">
        Sign In
      </button>
    </div>
  );
}