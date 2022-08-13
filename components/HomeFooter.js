import Image from "next/image";

const HomeFooter = (props) => {
  return (
    <footer
      id={props.id}
      className="bg-prim flex flex-row justify-around py-5 flex-wrap"
    >
      <div>
        <a href="https://github.com/scottdavisxx">
          <Image
            alt="github logo"
            src="/github.svg"
            height="100"
            width="300"
          ></Image>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/scottdavisxx/">
          <Image
            alt="linkedIn logo"
            src="/linkedIn.svg"
            height="100"
            width="300"
          ></Image>
        </a>
      </div>
    </footer>
  );
};
export default HomeFooter;
