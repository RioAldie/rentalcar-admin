'use client';

import { Bookings } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Bookings>[] = [
  {
    accessorKey: 'car.name',
    header: 'Car',
  },
  {
    accessorKey: 'car.location',
    header: 'Location',
  },
  {
    accessorKey: 'totalCost',
    header: 'Cost',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'user.name',
    header: 'User',
  },
  {
    accessorKey: 'user.phone',
    header: 'Phone',
  },
  {
    accessorKey: 'startDate',
    header: 'Start',
  },
  {
    accessorKey: 'endDate',
    header: 'End',
  },
];
