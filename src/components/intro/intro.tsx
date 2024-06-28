const Intro = () => {
  return (
    <section className="bg-primary text-secondary relative py-28 px-0 lg:px-[400px] flex flex-col flex-wrap 
    bg-[url('/images/bg-pattern-intro-right-desktop.svg')] bg-no-repeat bg-right-top  ">
      <div className="w-full lg:w-1/2 px-[-400px] pr-8">
        <h1 className="text-5xl font-bold mb-6">Humanizing your insurance.</h1>
        <p className="mb-8">
          Get your life insurance coverage easier and faster.<br></br> 
          We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="bg-white border-2 text-secondary px-6 py-3 rounded">
          VIEW PLANS
        </button>
      </div>
      <div className="w-1/3 lg:w-1/2 absolute left-1/2 top-1/2 -translate-x-1/8 -translate-y-1/2 mt-h-[100px] lg:mt-0 ">
        <img
          src="/images/image-intro-desktop.jpg"
          alt="Family"
          className="w-[400px] mt-[200px] opacity-90 rounded-lg"
        />
      </div>

      <div className="absolute  left-0 w-full h-full bg-[url('/images/bg-pattern-intro-left-desktop.svg')] bg-no-repeat bg-left-bottom bg-[length:150px]"></div>
    </section>
  );
};

export default Intro;
