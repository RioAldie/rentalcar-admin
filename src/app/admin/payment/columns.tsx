'use client';

import { Payment } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'bank',
    header: 'Bank',
  },
  {
    accessorKey: 'paymentDate',
    header: 'Date',
  },
  {
    accessorKey: 'transaction_proof',
    header: 'Proof',
  },
];
