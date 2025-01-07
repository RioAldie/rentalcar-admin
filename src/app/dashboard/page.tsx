import { getSession } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/signin');
  }

  return (
    <>
      <div className="flex flex-col w-full gap-5 mb-10">
        <p className="w-full text-4xl text-gray-500/25">REPORT</p>
        <div className="flex flex-row w-full justify-between">
          <div className="flex-col gap-5">
            <p className="text-xl font-bold text-gray-950">Revenue</p>
            <p className="text-3xl font-bold text-gray-900">
              Rp 5.420.3000
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <div className="border border-slate-100 px-3 py-2 rounded-md">
              <p className="text-base text-center font-bold text-gray-950">
                Monthly
              </p>
              <p className="bg-green-200 w-full text-center rounded-full px-2 py-1">
                +Rp 1.000.000
              </p>
            </div>
            <div className="border border-slate-100 px-3 py-2 rounded-md">
              <p className="text-base text-center font-bold text-gray-950">
                Weekly
              </p>
              <p className="bg-blue-200 w-full text-center rounded-full px-2 py-1">
                +Rp 200.000
              </p>
            </div>
            <div className="border border-slate-100 px-3 py-2 rounded-md">
              <p className="text-base text-center font-bold text-gray-950">
                Rent Active
              </p>
              <p className="bg-yellow-200 w-full text-center rounded-full px-2 py-1">
                4
              </p>
            </div>
            <div className="border border-slate-100 px-3 py-2 rounded-md">
              <p className="text-base text-center font-bold text-gray-950">
                New Rent
              </p>
              <p className="bg-red-200 w-full text-center rounded-full px-2 py-1">
                1
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  p-5 border border-gray-200">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aspernatur laudantium laborum minima fugit, nobis quo
          maiores non voluptatem natus est ducimus. Aperiam sequi in
          nesciunt? Enim saepe ad sit dignissimos?
        </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium labore inventore ab ratione corporis consectetur
          sed reprehenderit quia iusto a distinctio nostrum, sint
          nesciunt totam minus hic eaque vitae numquam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ad veritatis
          similique soluta voluptates minima perferendis debitis
          voluptatem fuga voluptate nobis sapiente necessitatibus
          expedita dolore, aliquid nostrum commodi, excepturi, magnam
          facere? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Eius architecto rem placeat adipisci repudiandae
          aliquam qui provident magnam ipsum voluptatum commodi sunt
          harum nihil quisquam dignissimos, doloribus, reprehenderit
          aperiam illo!
        </p>
      </div>
    </>
  );
};

export default Dashboard;
