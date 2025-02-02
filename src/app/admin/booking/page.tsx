import { getDataBooking } from '@/api';
import { getSession } from '@/lib/auth';
import React from 'react';
import { DataTable } from './data-table';
import { columns } from './column';

const Page = async () => {
  const session = await getSession();

  const data = await getDataBooking(session.token || '');

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
