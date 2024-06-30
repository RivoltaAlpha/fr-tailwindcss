import  { useState } from 'react';
import Header from './components/header/header';
import Hero from './components/intro/intro';
import Features from './components/body/features';
import Footer from './components/footer/footer';
import Form from './components/form/Form';
import UserDetails from './components/userDetails/UserDetails';
import { UserContext } from './context/UserContext';

const App= () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
//step 3 of userContext applies here, where we get the user details
  return (
    // use the provider
    <UserContext.Provider value={{ name, setName, age, setAge, email, setEmail, phone, setPhone }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Form />
          <UserDetails />
          <Features />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
