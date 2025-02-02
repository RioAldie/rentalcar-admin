import { columns } from './columns';
import { DataTable } from '../../../components/ui/data-table';
import { getDataPayment } from '@/api';
import { getSession } from '@/lib/auth';

export default async function Page() {
  const session = await getSession();
  const data = await getDataPayment(session.token || '');

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
