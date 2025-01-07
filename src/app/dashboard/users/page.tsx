import React from 'react';
import { DataTable } from './data-table';
import { columns } from './column';
import { getSession } from '@/lib/auth';
import { getDataUsers } from '@/api';

// const data = [
//   {
//     name: 'Rio',
//     email: 'rioaldie@gmail.com',
//     phone: 'd78989789047390',
//     createAt: '6238729292929',
//     id: 'sjlksjlksjsklslks',
//   },
// ];
const Page = async () => {
  const session = await getSession();
  const data = await getDataUsers(session.token || '');

  return (
    <div className="container  py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
