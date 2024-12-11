import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-2">
      <AlertCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}