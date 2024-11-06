import {
  ChatBubbleIcon,
  BellIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky z-30  p-5 rounded-lg  bg-white flex items-center justify-between bg-">
      <div className="text-[var(--textSoft)] p-2 font-bold capitalize">
        Welcome Admin
      </div>
      <div className="flex items-center  gap-5">
        <div className="flex items-center gap-2 border-2 border-gray-200  p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-[var(--text)] outline-none"
          />
        </div>
        <div className="flex gap-5">
          <ChatBubbleIcon />
          <BellIcon />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
