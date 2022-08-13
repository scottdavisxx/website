import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-comp p-1 fixed w-full z-50">
        <Link href="/">
          <a className="pl-2" onClick={handleClick}>
            <Image alt="temp" src="/bug.svg" height={20} width={20}></Image>
            <span className="text-xl text-prim font-bold ml-1">
              Scott Davis
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-comp-darker rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#062B74"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          {" "}
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="#skills">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-prim font-bold items-center justify-center hover:bg-comp-dark hover:text-white "
              >
                Skills
              </a>
            </Link>
            <Link href="#more-skills">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-prim font-bold items-center justify-center hover:bg-comp-dark hover:text-white"
              >
                More Skills
              </a>
            </Link>
            <Link href="#contact">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-prim font-bold items-center justify-center hover:bg-comp-dark hover:text-white"
              >
                Contact
              </a>
            </Link>
            <Link href="#social">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-prim font-bold items-center justify-center hover:bg-comp-dark hover:text-white"
              >
                Social
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
