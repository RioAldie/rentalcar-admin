import { Cars, Payment, Users } from '@/types';

export async function getDataPayment(): Promise<Payment[]> {
  try {
    const response = await fetch(
      'https://rentalcar-server.vercel.app/'
    );

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data: Payment[] = await response.json();

    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return []; // Return an empty array in case of error
  }
}

export async function getDataCar(): Promise<Cars[]> {
  try {
    const response = await fetch(
      'https://rentalcar-server.vercel.app/'
    );

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return []; // Return an empty array in case of error
  }
}
export async function getDataUsers(token: string): Promise<Users[]> {
  try {
    const response = await fetch(
      'https://rentalcar-server.vercel.app/users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add the token in the Authorization header
        },
      }
    );

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return []; // Return an empty array in case of error
  }
}
