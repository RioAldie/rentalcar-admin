import React from 'react';
import { LoginForm } from './form';
import Image from 'next/image';

const page = () => {
  return (
    <main className="mt-20 w-1/3">
      <div>
        <Image
          alt="logo"
          src={'/icons/carsewa-logo-full.svg'}
          width={250}
          height={50}
        />
        <h1 className="text-2xl font-extrabold">Login</h1>
      </div>
      <LoginForm />
    </main>
  );
};

export default page;
