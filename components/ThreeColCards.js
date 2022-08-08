import Image from "next/image";
import { card } from "../data/cards";

const ThreeColCards = () => {
  return (
    <div className="bg-prim flex flex-row justify-center flex-wrap py-5">
      {card.map((data, key) => {
        return (
          <div
            key={data.id}
            className="border-comp border-2 rounded-xl flex flex-col w-96 my-5 mx-1 px-4 pb-4 border-box"
          >
            <div className="flex self-center my-6">
              <Image
                alt="react logo"
                src={`/${data.image}`}
                height="200"
                width="200"
              ></Image>
            </div>
            <div className="mt-2">
              <h3 className="text-white text-4xl">{data.skill}</h3>
              <p className="text-white text-2xl leading-tight">{data.blurb}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ThreeColCards;
