import { FlipWords } from "./Flipwords";

function Hero() {
  return (
    <section className="bg-black h-180 text-white">
      <img
        // src="/images/gaming-pad-alt-1-svgrepo-com.svg"
        src="/images/gaming-svgrepo-com.svg"
        className="h-10 w-10 opacity-100
drop-shadow-[0_0_10px_rgba(217,70,239,1)] controller"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-4">GAME Development Club</p>

            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              GAME TO AIM
            </h1>
            <FlipWords
              className="text-2xl"
              words={[
                "NIT ROURKELA GAME DEVELOPMENT CLUB",
                "WE DONT CODE WE BUILD WORLDS",
                "JOIN US FOR AN EXICITING JOURNEY",
              ]}
              duration={2000}
            />
            <br />
            <button className="mt-8 px-6 py-3 cursor-pointer rounded-md bg-orange-400 text-black font-medium">
              Join Us
            </button>
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="relative max-w-md mx-auto">
              {/* glow */}
              <div className="absolute -inset-6 rounded-3xl bg-fuchsia-500/15 blur-3xl"></div>

              {/* image card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
                <img
                  src="/images/lucid-origin_futuristic_gaming_pc_setup_dark_background_neon_lighting_cyberpunk_style_ultra_d-0.jpg"
                  alt="Gaming setup"
                  className="w-full h-[450px] md:h-[500px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
