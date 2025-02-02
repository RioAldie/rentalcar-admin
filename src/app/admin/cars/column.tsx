'use client';

import { Cars, Payment } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Cars>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'brand',
    header: 'Brand',
  },
  {
    accessorKey: 'model',
    header: 'Model',
  },
  {
    accessorKey: 'year',
    header: 'Year',
  },
  {
    accessorKey: 'color',
    header: 'Color',
  },
  {
    accessorKey: 'image',
    header: 'Image',
  },
  {
    accessorKey: 'transmision',
    header: 'Transmision',
  },
  {
    accessorKey: 'seat',
    header: 'Seat',
  },
  {
    accessorKey: 'costPerDay',
    header: 'CostPerDay',
  },
  {
    accessorKey: 'location',
    header: 'Jakarta',
  },
  {
    accessorKey: 'available',
    header: 'Available',
  },
  {
    accessorKey: 'createdAt',
    header: 'Since',
  },
];
