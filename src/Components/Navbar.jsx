// import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between items-center px-3 py-3 bg-sky-900 sticky">
      <div className="flex gap-3 items-center ">
        <img
          src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968575/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
          className="h-15 items-center"
        ></img>
        <h1 className="text-white text-2xl">GAME TO AIM</h1>
      </div>
      <div className="flex gap-8">
        <a className="text-white text-2xl">Home</a>
        <a className="text-white text-2xl">About</a>
        <a className="text-white text-2xl">Projects</a>
        <a className="text-white text-2xl">Teams</a>
      </div>
      <div>
        <a className="text-white text-2xl">Join Us</a>
      </div>
    </div>
  );
}

export default Navbar;
