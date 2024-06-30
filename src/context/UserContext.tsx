import { createContext } from 'react';


//typing the userContext
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
//1) creating the user context
//2)follow up by creating the provider and give it an object
//3)use the provider
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
