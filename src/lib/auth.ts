'use server';

import { defaultSession, sessionOptions } from '@/lib/lib';
import { SessionData } from '@/types';
import { error } from 'console';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getSession = async () => {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // CHECK THE USER IN THE DB

  return session;
};

export async function login(formData: {
  email: string;
  password: string;
}) {
  const session = await getSession();

  const res = await fetch(
    'https://rentalcar-server.vercel.app/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );

  if (!res.ok) {
    return { error: 'wrong credentials!' };
  }
  const user = await res.json();
  const { token } = user.data;
  const { id, name, email } = user.data.user;

  session.userId = id;
  session.email = email;
  session.isLoggedIn = true;
  session.username = name;
  session.token = token;

  await session.save();

  return redirect('/dashboard'); // Return the response data
}

export const logout = async () => {
  const session = await getSession();

  session.destroy();

  return redirect('/signin');
};
