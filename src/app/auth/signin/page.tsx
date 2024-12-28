import React from 'react';
import { ProfileForm } from './form';
import Image from 'next/image';

const page = () => {
  return (
    <main className="mt-64 w-1/3">
      <div>
        <Image
          alt="logo"
          src={'/icons/carsewa-logo-full.svg'}
          width={250}
          height={50}
        />
        <h1 className="text-2xl font-extrabold">Login</h1>
      </div>
      <ProfileForm />
    </main>
  );
};

export default page;
