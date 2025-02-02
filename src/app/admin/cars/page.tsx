import { getDataCar } from '@/api';
import React from 'react';
import { columns } from './column';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Page() {
  const data = await getDataCar();

  return (
    <section className="w-full rounded-2xl  p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link
            href="/admin/cars/new"
            className="text-black hover:text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
