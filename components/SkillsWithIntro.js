import SkillIcon from "./elements/SkillIcon";

const SkillsWithIntro = () => {
  return (
    <div className="bg-prim-darker flex flex-col items-center justify-between">
      <h2 className="text-white text-5xl font-bold my-5">Other Skills</h2>
      <p className="text-white w-5/6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec dictumst neque, 
        non consectetur vitae porttitor metus, ac. Bibendum eget malesuada maecenas volutpat 
        elit. Malesuada gravida egestas lorem dictum parturient eleifend. Aliquet mollis semper 
        risus, orci ut a libero. Eu turpis donec sodales egestas facilisi eget aliquet. Orci et 
        curabitur proin.
      </p>
      <div className="flex flex-row"> 
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
      </div>
    </div>
  )
}
export default SkillsWithIntro;