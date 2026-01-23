import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
// import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className=" flex justify-between items-center px-7 py-6  backdrop-blur-2xl ">
      <div className="flex gap-3 items-center ">
        <img
          src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968575/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
          className="h-12 items-center cursor-pointer"
        ></img>
        <h1
          className=" text-2xl font-extrabold text-text-primary cursor-pointer ml-3 leading-tight
        "
        >
          GAME TO AIM
        </h1>
      </div>
      <div className="flex gap-12 mr-6  text-text-secondary items-center">
        <NavLink className="text-2xl hover:text-[#FF006E] hover:scale-105 hover:shadow-lg  hover:shadow-pink-500/40 transition-all duration-300">
          Home
        </NavLink>
        <NavLink className="text-2xl hover:text-[#FF006E]  hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300">
          About
        </NavLink>
        <NavLink className="text-2xl hover:text-[#FF006E]  hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300">
          Projects
        </NavLink>
        <NavLink className="text-2xl hover:text-[#FF006E]  hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300">
          Teams
        </NavLink>
      </div>
      {/* #FF006E to #D946EF */}
      <div>
        <NavLink className=" px-5 py-2 rounded-lg font-bold text-white text-xl bg-linear-to-r from-[#FF006E] to-[#D946EF]">
          Join Us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
