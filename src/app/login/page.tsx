// app/login/page.tsx

'use client';

import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <LoginForm />
      </main>
    </>
  );
}
