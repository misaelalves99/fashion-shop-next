'use client';

import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <RegisterForm />
      </main>
    </>
  );
}
