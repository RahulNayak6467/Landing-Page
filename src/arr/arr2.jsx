import { Gamepad2, Component, Box, Laptop, Play } from "lucide-react";
// (Icon, teamName, description, experience, tools);
const teams = [
  {
    Icon: <Gamepad2 />,
    teamName: "The CODE TEAM",
    description:
      "Builds the core gameplay systems, mechanics that make the game work",
    handsOnExperience: [
      "Gameplay Systems",
      "Mechanics and UI Logic",
      "Debugging and Iteration",
    ],
    tools: ["Unity", "UnrealEngine", "C++", "C#"],
    endPara:
      "For people who enjoy logic, problem-solving, and turning ideas into working systems.",
  },
  {
    Icon: <Box />,
    teamName: "3D TEAM",
    description:
      "Creates the 3D assets that bring the game world to life. Works on models, environments, and making assets game-ready",
    handsOnExperience: [
      "3D models, props, and environment assets",
      "Texturing, UVs, and basic lighting look",
      "Optimizing assets for real-time performance",
    ],
    tools: ["Blender", "Texturing", "Mapping", "Lighting"],
    endPara:
      "For people who like visual work, creativity, and building worlds from scratch",
  },
  {
    Icon: <Component />,
    teamName: "WEBDEV TEAM",
    description:
      "Builds and maintains the club’s website and online presence. Focuses on clean UI, responsiveness, and smooth interactions.",
    handsOnExperience: [
      "Landing pages, sections, and responsive layouts",
      "Forms/registrations and basic integrations",
      "UI polish, accessibility, and performance",
    ],
    tools: ["React", "Tailwind", "JavaScript", "Git"],
    endPara:
      "For people who like designing interfaces and shipping polished web experiences",
  },
  {
    Icon: <Laptop />,
    teamName: "GAME DESIGN",
    description:
      "Designs the gameplay loop, rules, and player experience. Turns raw ideas into structured, playable design",
    handsOnExperience: [
      "Game mechanics, balance, and progression",
      "Level design concepts and documentation",
      "Playtesting feedback and iteration",
    ],
    tools: ["Documentation", "Figma", "Playtesting", "Design"],
    endPara: "For people who love storytelling, systems thinking.",
  },
  {
    Icon: <Play />,
    teamName: "Video Editing,Content & Design",
    description:
      "Creates the visuals that represent the club online. Handles edits, posters, reels, and branding consistency",
    handsOnExperience: [
      "Posters, thumbnails, and social media designs",
      "Reels/trailers edits and motion graphics",
      "Branding, layout consistency, and visuals",
    ],
    tools: ["PremierePro", "AfterEffects", "Canva", "CapCut"],
    endPara: "For people who enjoy content creation, visual storytelling",
  },
];

export default teams;
