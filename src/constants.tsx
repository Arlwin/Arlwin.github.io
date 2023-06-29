import { ReactElement } from "react";
import { FaJava } from "react-icons/fa";
import { 
  SiPython, 
  SiDart, 
  SiTypescript, 
  SiJavascript,
  SiGodotengine,
  SiSpring, 
  SiSpringboot,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiAmazonaws,
  SiFirebase,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiCircleci,
  SiGithubactions,
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiTwitter
} from "react-icons/si";
import { TbSql } from 'react-icons/tb'

export const LANGUAGES: {
  name: string;
  icon: ReactElement;
}[] = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Dart",
    icon: <SiDart />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "SQL",
    icon: <TbSql />,
  },
  {
    name: "GDScript",
    icon: <SiGodotengine />,
  }
];

export const FRAMEWORKS: {
  name: string;
  icon: ReactElement;
}[] = [
  {
    name: "Spring",
    icon: <SiSpring />,
  },
  {
    name: "Springboot",
    icon: <SiSpringboot />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
  },
  {
    name: "Angular",
    icon: <SiAngular />,
  },
  {
    name: "VueJS",
    icon: <SiVuedotjs />,
  },
];

export const TOOLS: {
  name: string;
  icon: ReactElement;
}[] = [
  {
    name: "AWS",
    icon: <SiAmazonaws />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "CircleCI",
    icon: <SiCircleci />,
  },
  {
    name: "Github Actions",
    icon: <SiGithubactions />,
  },
  {
    name: "Godot Engine",
    icon: <SiGodotengine />,
  },
];

export const EXPERIENCES: {

  company: string,
  years: string,
  title: string,
  description: string,
}[] = [
  {
    company: 'Trend Micro',
    years: '2018 - 2020',
    title: 'Technical Support',
    description: 
      `
        Fresh out of college, I started out as a tech support for the company's antivirus products mostly dealing with servers, log files and network related troubleshooting.  
      `
  },
  {
    company: 'Trend Micro',
    years: '2020 - 2022',
    title: 'Cloud Software Engineer',
    description: 
      `
        Within the same company, I was transferred to the Infrastructure department responsible for developing internal tools for our Threat Researchers. 
      `
  },
  {
    company: 'Trend Micro',
    years: '2022 - 2023',
    title: 'Senior Cloud Software Engineer',
    description: 
      `
        After about 2 years, I was promoted to a more senior role wherein I could lead a small squad and drive our squad and the team's development process forward.
      `
  },
  {
    company: 'Indra',
    years: '2023 - Now',
    title: 'Senior Consultant',
    description: 
      `
        After a year, I went outside my comfort zone and explored new opportunities where I managed to find one here. In this role, I was more of a Jack-of-All trades developer wherein I could handle different projects with the opportunity of learning new tech stacks. 
      `
  },
];

export const PROJECTS: {

  cover: string,
  title: string,
  years: string,
  description: string,
  url: string,
}[] = [
  {
    cover: '/projects/portfolio.png',
    title: 'My Portfolio',
    years: '2023',
    description: 'This website, of course!',
    url: 'https://arlwin.github.io',
  },
  {
    cover: '/projects/ordertaker.png',
    title: 'Ordertaker',
    years: '2021',
    description: 'A mobile app designed for tracking orders.',
    url: 'https://github.com/Arlwin/gamewin',
  },
  {
    cover: '/projects/gamewin.png',
    title: 'Gamewin',
    years: '2023',
    description: 'A simple website for checking out games using IGDB.',
    url: 'https://arlwin.github.io/gamewin',
  },
  {
    cover: '/projects/movieman.png',
    title: 'Movieman',
    years: '2023',
    description: 'A simple mobile-first website for checking out movie information using TMDB.',
    url: 'https://movieman-production.up.railway.app',
  },
]

export const CONTACTS: {

  icon: ReactElement,
  url: string,
}[] = [
  {
    icon: <SiGmail />,
    url: 'mailto:arlwinkarlfajardo@gmail.com',
  },
  {
    icon: <SiLinkedin />,
    url: 'https://www.linkedin.com/in/arlwinfajardo/',
  },
  {
    icon: <SiGithub />,
    url: 'https://github.com/Arlwin',
  },
  {
    icon: <SiTwitter />,
    url: 'https://twitter.com/hourlywind',
  },
]