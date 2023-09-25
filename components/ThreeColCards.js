import Image from "next/image";
import { card } from "../data/cards";

const ThreeColCards = (props) => {
  return (
    <div className="bg-prim flex flex-row flex-wrap py-5 justify-evenly">
      <span id={props.id} className="-top-20 block relative"></span>
      {card.map((skillCard) => {
        return (
          <div
            key={skillCard.id}
            className="border-comp border-2 rounded-xl flex flex-col w-11/12 xl:w-96 my-5 mx-1 px-4 pb-4 border-box"
          >
            <div className="flex self-center my-6">
              <Image
                alt="react logo"
                src={`/${skillCard.image}`}
                height="200"
                width="200"
              ></Image>
            </div>
            <div className="mt-2">
              <h3 className="text-white text-4xl mb-4">{skillCard.skill}</h3>
              <p className="text-white text-2xl leading-tight">
                {skillCard.blurb}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ThreeColCards;
