// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

interface AuthContextType {
  user: any; // Replace 'any' with your user type
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with your user type

  useEffect(() => {
    // Check for existing token and fetch user data if needed
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally fetch user data from your API
      // fetchUserData(token);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch(
      'https://your-api-url.com/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Store the token
    setUser(data.user); // Set user data
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
