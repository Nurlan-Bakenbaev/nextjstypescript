import { AiFillGithub } from "react-icons/Ai";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="bg-slate-700 h-[80px] drop-shadow-xl bg-stale-600 p-3 sticky top-0  z-10  ">
      <div>
        <h1 className="text-3xl text-white font-bold"> Nurlan Bakenbaev</h1>
        <div>
          <Link href={'/'}>
            
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
};
