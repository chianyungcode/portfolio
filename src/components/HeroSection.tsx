const HeroSection = () => {
  return (
    <section className="max-w-[1440px] px-[112px] py-[96px] mx-auto space-y-12 mt-20 flex items-center justify-between">
      <div className="space-y-3">
        <div className="px-4 py-2 bg-gray-100 text-black font-semibold rounded-3xl inline-flex gap-x-2 items-center ">
          <div className="bg-lime-200 w-4 h-4 rounded-full p-1">
            <div className="bg-lime-400 w-2 h-2 rounded-full p-1" />
          </div>
          <p>Available for new opportunities</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">Software Engineer</h1>
          <p className="max-w-xl">
            I am a software engineer with a passion for creating innovative
            solutions and a deep understanding of the latest technologies in the
            industry.
          </p>
        </div>
      </div>
      <img src="/public/images/hero-image.png" alt="Hero Image" />
    </section>
  );
};

export default HeroSection;
