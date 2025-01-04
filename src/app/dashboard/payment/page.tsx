import { Payment } from '@/types';
import { columns } from './columns';
import { DataTable } from '../../../components/ui/data-table';
import { getDataCar, getDataPayment } from '@/api/payment';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//       image: 'jjsjs',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//       image: 'jjsjs',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//       image: 'jjsjs',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//       image: 'jjsjs',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//       image: 'jjsjs',
//     },
//     // ...
//   ];
// }

export default async function Page() {
  const data = await getDataPayment();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
