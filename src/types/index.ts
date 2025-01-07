export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  image: string;
};

export type Cars = {
  name: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  image: string;
  transmision: string;
  seat: number;
  costPerDay: string;
  location: string;
  available: boolean;
  createAt: Date;
};
export type Users = {
  name?: string;
  email: string;
  phone?: string;
  createdAt: string;
  id: string;
};

export type SessionData = {
  userId?: string;
  username?: string;
  email?: string;
  isLoggedIn: boolean;
  token?: string;
};
