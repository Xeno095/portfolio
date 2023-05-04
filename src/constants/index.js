import {
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  bootstrap,
  conciseAI,
  movieAmrit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  }
  
];

const projects = [
  {
    name: "Movie App",
    description:
      "Web-based platform that allows users to search about any movies. It will show the details like IMDb Rating, Casts, Awerds, Release Date and Plot of the searched movie. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Media-query",
        color: "pink-text-gradient",
      },
    ],
    image: movieAmrit,
    link: "https://movieamrit.netlify.app/",
    source_code_link: "https://github.com/Xeno095/movieamrit",
  },
  {
    name: "Concise A.I.",
    description:
      "Web application that accept URL of any article like news, related any topic and summerize it using an text summerizer API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "media-query",
        color: "pink-text-gradient",
      },
    ],
    image: conciseAI,
    link: "https://conciseai.netlify.app/",
    source_code_link: "https://github.com/Xeno095/Concise-A.I.",
  },
  
];

export { services, technologies, projects };
