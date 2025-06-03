// app/layout.tsx

import React, { ReactNode } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import { CartProvider } from '../app/context/CartContext';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen w-full bg-white text-black">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
