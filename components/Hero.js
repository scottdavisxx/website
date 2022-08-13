const Hero = () => {
  return (
    <div className="flex flex-col bg-prim-light justify-center pt-16 xl:pt-5 pb-5">
      <h1 className="ml-3 sm:ml-16 sm:mt-16 font-hero text-8xl xl:text-9xl text-comp-lighter font-bold leading-none">
        Scott Davis
      </h1>
      <h2 className="text-comp-lighter text-center text-4xl my-4 font-bold leading-none mt-6 w-11/12 self-center">
        Phasellus laoreet lorem vel dolor tempus vehicula.
      </h2>
      <p className="w-4/5 self-center text-comp-lighter text-center text-xl my-4 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet id
        venenatis, odio sed odio.
      </p>
    </div>
  );
};
export default Hero;
