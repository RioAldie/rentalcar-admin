import { getSession } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/signin');
  }

  return (
    <div className="flex flex-col w-full gap-5 mb-10">dashboard</div>
  );
};

export default Dashboard;
