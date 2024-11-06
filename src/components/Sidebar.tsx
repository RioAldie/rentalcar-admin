import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DashboardIcon,
  DashIcon,
  BarChartIcon,
  ArchiveIcon,
  ExitIcon,
  EnvelopeClosedIcon,
  IdCardIcon,
  AvatarIcon,
  CalendarIcon,
  Link2Icon,
} from '@radix-ui/react-icons';

const Sidebar = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white border-slate-100 border-r-2 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg ">
              <Image
                src={'/icons/carsewa-logo.svg'}
                alt={'carsewa-logo'}
                width={100}
                height={50}
              />
            </a>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <DashboardIcon />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example">
              <Link2Icon />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Client Web
              </span>
            </button>
            <ul
              id="dropdown-example"
              className="hidden py-2 space-y-2">
              <li>
                <Link
                  href="/cars"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <DashIcon /> Products
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"></a>
          </li>
          <li>
            <Link
              href="/balance"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <BarChartIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Balance
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <CalendarIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Bookings
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/payment"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <EnvelopeClosedIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Payment
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                1
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <AvatarIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Users
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/cars"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <ArchiveIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Products
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/bank"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <IdCardIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Bank
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <ExitIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Sign Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
