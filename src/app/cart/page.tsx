// app/cart/page.tsx

'use client';

import React from 'react';
import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-100 pt-10">
      <Cart />
    </main>
  );
}
