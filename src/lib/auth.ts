export async function login(formData: FormData) {
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const res = fetch('https://rentalcar-server.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}
