export type Payment = {
  id: string;
  amount: number;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  transaction_proof: string;
  bank: string;
  paymentDate: string;
  bookingId: string;
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
  id: string;
};
export type Users = {
  name?: string;
  email: string;
  phone?: string;
  createdAt: string;
  id: string;
};
export type Bookings = {
  id: string;
  userId: string;
  carId: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: string;
  createdAt: string;
  user: {
    name: string;
    phone: string;
  };
  car: {
    name: string;
    brand: string;
    model: string;
    location: string;
    available: boolean;
  };
};

export type SessionData = {
  userId?: string;
  username?: string;
  email?: string;
  isLoggedIn: boolean;
  token?: string;
};
