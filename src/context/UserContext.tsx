import { createContext } from 'react';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  age: string;
  setAge: (age: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}

export const UserContext = createContext<UserContextType>({
  name: '',
  setName: () => {},
  age: '',
  setAge: () => {},
  email: '',
  setEmail: () => {},
  phone: '',
  setPhone: () => {},
});
