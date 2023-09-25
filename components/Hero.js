const Hero = () => {
  return (
    <div className="flex flex-col bg-prim-light justify-center pt-16 xl:pt-5 pb-5">
      <h1 className="ml-3 sm:ml-16 sm:mt-16 font-hero text-8xl xl:text-9xl text-comp-lighter font-bold leading-none min-h-fit">
        Scott Davis
      </h1>
      <h2 className="text-comp-lighter text-center text-4xl my-4 font-bold leading-10 mt-6 w-8/12 self-center">
        I am a passionate Software Developer with years of experience building
        Web Apps and large websites.
      </h2>
      <p className="w-8/12 self-center text-comp-lighter text-center text-xl my-4 font-semibold">
        I love learning new technologies, working with colleagues and clients,
        and most of all building things!
      </p>
    </div>
  );
};
export default Hero;
