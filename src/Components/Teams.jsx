import { games } from "../arr/arr1";
import teams from "../arr/arr2";
import ExperienceList from "./ExperienceList";
import Skills from "./Skills";

function Teams() {
  return (
    <section className=" bg-black py-24" id="teams">
      <h2 className="gradientText font-extrabold text-3xl  md:text-5xl text-center mb-5">
        Introducing our Squad
      </h2>
      <p className="text-text-secondary text-xl md:3xl text-center mb-12">
        From code to content there's a place for you here.
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 sm:px-25 lg:px-40  mx-auto gap-x-6 gap-y-8">
        {teams.map((el) => (
          <div
            className="border  border-fuchsia-500/20 hover:scale-105 hover:border-fuchsia-900  rounded-2xl transition-all duration-300 will-change-transform
hover:-translate-y-1
hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]"
          >
            <TeamsList
              Icon={el.Icon}
              teamName={el.teamName}
              description={el.description}
              experience={el.handsOnExperience}
              tools={el.tools}
              endPara={el.endPara}
            />
          </div>
        ))}
        {/* <div className="border-2 h-100 border-fuchsia-900 rounded-2xl">
          <TeamsList />
        </div> */}
        {/* <div
          className="border h-100 border-fuchsia-500/20 hover:scale-105 hover:border-fuchsia-900  rounded-2xl transition-all duration-300 will-change-transform
hover:-translate-y-1
hover:shadow-[0_0_45px_rgba(168,85,247,0.40)]"
        >
          <TeamsList />
        </div>
        <div className="border-2 h-100 border-fuchsia-900 rounded-2xl"></div>
        <div className="border-2 h-100 border-fuchsia-900 rounded-2xl"></div>
        <div className="border-2 h-100 border-fuchsia-900 rounded-2xl"></div>
        <div className="border-2 h-100 border-fuchsia-900 rounded-2xl"></div> */}
      </div>
    </section>
  );
}

function TeamsList({
  Icon,
  teamName,
  description,
  experience,
  tools,
  endPara,
}) {
  return (
    <li className="p-6 text-text-secondary ">
      <div className="flex items-center gap-3">
        {Icon}
        <h3 className="text-text-secondary md:text-2xl font-extrabold lg:text-2xl">
          {teamName}
        </h3>
      </div>
      <div className="mt-5">
        <p className="text-text-secondary font-medium text-sm mb-10 border-b-fuchsia-300/20 border-b">
          {description}
        </p>
        <span className=" gradientText text-xl">You will Work on:</span>
        <ul className="grid-cols-1 mb-1 list-disc marker:text-fuchsia-500 pl-4">
          {/* <li className="mt-1 text-lg list">Gameplay Systems</li>
          <li className=" text-lg">Mechanics and UI Logic</li>
          <li className=" text-lg">Debugging and Iteration</li> */}
          {experience?.map((list) => (
            <ExperienceList list={list} key={list} />
          ))}
        </ul>
      </div>
      <div>
        <span className="gradientText text-lg">Tools:</span>
        <div className=" mt-2 flex flex-wrap gap-2">
          {/* <span className="bg-linear-to-r from-pink-500 to-violet-500 w-fit rounded-full text-sm text-white px-4 py-1 leading-none">
            Unity
          </span>
          <span className="bg-linear-to-r from-pink-500 to-violet-500 w-fit rounded-full text-sm text-white px-4 py-1 leading-none">
            Blender
          </span>
          <span className="bg-linear-to-r from-pink-500 to-violet-500 w-fit rounded-full text-sm text-white px-4 py-1 leading-none">
            C++
          </span>
          <span className="bg-linear-to-r from-pink-500 to-violet-500 w-fit rounded-full text-sm text-white px-4 py-1 leading-none">
            C#
          </span> */}
          {tools?.map((skills) => (
            <Skills skills={skills} key={skills} />
          ))}
        </div>
        <p className="mt-2">{endPara}</p>
      </div>
    </li>
  );
}

export default Teams;
