import SkillCard from "./elements/SkillCard";

const ThreeColCards = () => {
  return (
    <div className="bg-prim flex flex-row justify-center justify-evenly flex-wrap py-5">
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
    </div>
  )
}
export default ThreeColCards;