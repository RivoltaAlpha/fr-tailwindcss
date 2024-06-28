const FeatureItem: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="bg-secondary rounded-full p-4 inline-block mb-4">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Body = () => {
  return (
    <section className="py-16 mt-[200px] mb-16 mx-10 px-6">
      <h2 className="text-6xl font-bold mb-12 ">We're different</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureItem
          icon="/images/icon-snappy-process.svg"
          title="Snappy Process"
          description="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
        />
        <FeatureItem
          icon="/images/icon-affordable-prices.svg"
          title="Affordable Prices"
          description="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        />
        <FeatureItem
          icon="/images/icon-people-first.svg"
          title="People First"
          description="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
        />
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section
      className="bg-primary text-white py-20 mt-[150px] mb-[100px] ml-[150px] mr-[150px]
       px-6 my-12 bg-[url('/images/bg-pattern-how-we-work-desktop.svg')] bg-no-repeat bg-right"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h2 className="text-secondary font-bold mb-4 text-5xl  md:mb-0">
          Find out more <br></br> about how we work
        </h2>
        <button className="  border-2 text-secondary px-6 py-3 rounded">
          HOW WE WORK
        </button>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <>
      <Body />
      <CallToAction />
    </>
  );
};

export default Features;
