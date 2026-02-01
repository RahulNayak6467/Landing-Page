import { Gamepad2, Component, Box, Laptop, Play } from "lucide-react";

const teams = [
  {
    Icon: <Gamepad2 />,
    teamName: "The CODE TEAM",
    description:
      "Builds the core gameplay logic, game physics and mechanics that make the game run. Focuses on logic, performance and debugging ",
    handsOnExperience: [
      "Gameplay Systems",
      "Mechanics and UI Logic",
      "Debugging and Polishing",
    ],
    tools: ["Unity", "UnrealEngine", "C++", "C#"],
    endPara:
      "For people who enjoy logic, problem-solving, and turning ideas into reality.",
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
    tools: ["Blender", "Texturing", "RayTracer", "Lighting"],
    endPara:
      "For people who like visual work, creativity, and building products from scratch",
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
      "Designs the gameplay loop, rules, and overall player experience. Takes rough ideas and turns them into a structured, playable design.",
    handsOnExperience: [
      "Game mechanics, balance, and progression",
      "Level design concepts and documentation",
      "Playtesting feedback and iteration",
    ],
    tools: ["Blender", "Figma", "Playtesting", "Design"],
    endPara: "For people who love storytelling, and design worlds.",
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
