import Image from "next/image";
const SkillCard = () => {
  return (
    <div className="border-comp border-2 rounded-xl flex flex-col w-96 my-5 mx-1 px-4 pb-4 border-box">
      <div className="flex self-center my-1">
        <Image
          alt="react logo"
          src="/react.svg"
          height="200"
          width="200"
        ></Image>
      </div>
      <div className="mt-2">
        <h3 className="text-white text-4xl">React</h3>
        <p className="text-white text-2xl leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          explicabo repellat non alias facilis ipsam nam dicta ipsum laboriosam
          est, quo veritatis id aliquam quibusdam.
        </p>
      </div>
    </div>
  );
};
export default SkillCard;
