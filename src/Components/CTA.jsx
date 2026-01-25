import {
  Sparkle,
  Handshake,
  TargetIcon,
  Shield,
  CalendarCheck,
  Gamepad2,
  Wrench,
  Trophy,
  Check,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";
function CTA() {
  return (
    <section className="bg-black py-12 " id="CTA">
      <h2 className="text-3xl md:text-5xl mx-auto gradientText text-center">
        Ready To Join Us?
      </h2>
      <p className="text-text-secondary mt-2 text-center text-xs md:text-sm">
        Excited to start a trilling joruney with us
      </p>
      <div className="border-2  mt-8 rounded-2xl animate-float motion-reduce:animate-none transition-all p-6 w-[78%]  hover:blur-none hover:opacity-100  md:w-[60%] lg:w-[50%] xl:w-[40%] border-fuchsia-900/50 mx-auto shadow-[5px_5px_50px_5px_rgba(168,85,247,0.6)]">
        <div className="flex gap-4 h-fit items-center">
          <Sparkle size={20} className="text-white" />
          <h2 className="text-text-secondary brightness-125 font-extrabold text-lg md:text-2xl">
            JOIN THE CLUB
          </h2>
        </div>
        <div>
          <p className="text-text-secondary mt-2 text-sm">
            Collborate across teams, ship real projects, and learn through
            workshops and game jams
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-y-1 pb-1 border-b border-b-fuchsia-900/60">
          <div className="flex gap-2 items-center">
            <Handshake size={16} className="text-white" />
            <p className="text-text-secondary text-sm font-500">
              Beginner Friendly
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Shield size={16} className="text-white" />
            <p className="text-text-secondary text-sm font-500">
              Team Collaboration
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TargetIcon size={16} className="text-white" />
            <p className="text-text-secondary text-sm font-500">
              Impactful Projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-1 mt-2">
          <div className="flex gap-2 items-center">
            <CalendarCheck size={16} className="text-white" />
            <p className="gradientText text-sm">Weekly sessions</p>
          </div>
          <div className="flex gap-2 items-center">
            <Gamepad2 size={16} className="text-white" />
            <p className="gradientText text-sm">Game jams and builds</p>
          </div>
          <div className="flex gap-2 items-center">
            <Wrench size={16} className="text-white" />
            <p className="gradientText text-sm">Tools and mentorship</p>
          </div>
          <div className="flex gap-2 items-center">
            <Trophy size={16} className="text-white" />
            <p className="gradientText text-sm">Showcase your work</p>
          </div>
        </div>
        <div>
          <div className="flex gap-10 items-center mt-3">
            <button className="cursor-pointer  px-3 py-1.5 rounded-md text-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition">
              Join Now
            </button>
            <div className="flex gap-1">
              <a
                href="https://www.instagram.com/accounts/login/?next=%2Fgame.to.aim&source=omni_redirect"
                target="_blank"
                rel="noreferrer"
                className="p-1.5"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/game-to-aim/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://chat.whatsapp.com/J5yYZf1OL6rL6VOS1iYKnL"
                target="_blank"
                rel="noreferrer"
                className="p-1.5"
              >
                <User size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Check size={16} className="text-white" />
          <p className="text-text-secondary text-xs">
            No prior experience needed but the willingness to learn
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
