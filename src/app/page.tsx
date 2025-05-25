// app/page.tsx

import React from 'react';
import Hero from '../app/components/Hero';
import Sale from '../app/components/Sale';
import Categories from '../app/components/Categories';
import RegistrationEmail from '../app/components/RegistrationEmail';
import Info from '../app/components/Info';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-16 bg-gray-200">
      <Hero />
      <Sale />
      <Categories />
      <RegistrationEmail />
      <Info />
    </main>
  );
};

export default Home;
