import { logout } from '@/lib/auth';
import { ExitIcon } from '@radix-ui/react-icons';
import React from 'react';

const Logout = () => {
  return (
    <form action={logout}>
      <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <ExitIcon />
        <span className="flex-1 ms-3 whitespace-nowrap">
          Sign Out
        </span>
      </button>
    </form>
  );
};

export default Logout;
