import Header from './components/header/header';
import Hero from './components/intro/intro';
import Features from './components/body/features';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;