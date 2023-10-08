import { AiFillGithub } from "react-icons/Ai";
import { AiOutlineLinkedin } from "react-icons/Ai";

import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-center items-center gap-11  bg-slate-700 h-[80px] drop-shadow-xl bg-stale-600 p-3 sticky top-0  z-10  ">
      <div>
        <h1 className="text-3xl text-white font-bold"> Nurlan Bakenbaev</h1>
      </div>
      <div className=" flex gap-5 text-white text-4xl">
        <Link target="blank" href={"https://github.com/Nurlan-Bakenbaev"}>
          <AiFillGithub />
        </Link>
        <Link target="blank" href={"https://linkedin.com"}>
          <AiOutlineLinkedin />
        </Link>
      </div>
    </nav>
  );
};
