import { getDataCar } from '@/api/payment';
import React from 'react';
import { columns } from './column';
import { DataTable } from './data-table';

export default async function Page() {
  const data = await getDataCar();
  console.log('cars =>', data);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
