import Image from "next/image";
const SkillIcon = () => {
  return (
    <div className="flex flex-col my-5 w-39">
      <h4 className="text-prim-lighter text-4xl font-mono text-center">Git</h4>
      <Image
                alt="react logo"
                src="/git.svg"
                height="100"
                width="100"
      ></Image>
    </div>
  );
};
export default SkillIcon;
