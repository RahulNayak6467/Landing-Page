function Footer() {
  return (
    <footer className="bg-black py-6 border-2 flex  max-[850px]:flex-col max-[850px]:text-left items-center justify-between border-bg-primary">
      <div className="flex items-center ">
        <img
          src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968575/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
          className=" px-4 h-12 max-[850px]:h-8  cursor-pointer"
        />
        <div>
          <p className=" px-4 gradientText text-xs md:text-sm">
            GTA LANDING PAGE MADE BY RAHUL NAYAK
          </p>
          <p className=" px-4 gradientText text-xs md:text-sm">
            Roll No: 125CS0097
          </p>
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-[9px] md:text-sm pr-4">
          Event posters and Images belong to GTA and their respective creators
        </p>
      </div>
    </footer>
  );
}

export default Footer;
