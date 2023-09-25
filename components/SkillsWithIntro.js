import Image from "next/image";
import { smallCards } from "../data/smallCards";

const SkillsWithIntro = (props) => {
  return (
    <div className="bg-prim-darker flex flex-col items-center justify-evenly">
      <span id={props.id} className="-top-20 block relative"></span>
      <h2 className="text-white text-5xl font-bold my-5">Other Skills</h2>
      <p className="text-white w-6/12 text-center mb-5 text-xl">
        In my years of experience as a developer I have worked on full stack
        applications in ASP .NET and built custom websites using various
        technologies.
      </p>
      <div className="flex flex-row space-x-8 flex-wrap justify-center">
        <div className="flex flex-row px-5 my-5 w-39 flex-wrap justify-center">
          {smallCards.map((card) => {
            return (
              <div key={card.id} className="mx-5">
                <Image
                  alt={card.skill}
                  src={`/${card.image}`}
                  height={100}
                  width={100}
                ></Image>
                <h4 className="text-prim-lighter text-4xl font-mono text-center">
                  {card.skill}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SkillsWithIntro;
