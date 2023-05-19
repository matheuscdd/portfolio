import { 
  SiScratch, 
  SiTypescript, 
  SiSqlite, 
  SiDjango, 
  SiExpress,
  SiPhotopea,
  SiAdobephotoshop, 
  SiJson,
  SiPhp
} from "react-icons/si";
import {
  GrUbuntu
} from "react-icons/gr";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaReact,
  FaGitAlt
} from "react-icons/fa";
import { VscTerminalLinux } from "react-icons/vsc";
import { RiVuejsFill, RiVipDiamondFill } from "react-icons/ri";
import Postgles from "../public/static/img/stacks/postgles.svg";
import Node from "../public/static/img/stacks/node.svg";
import styled from "../public/static/img/stacks/styled.svg";
import jest from "../public/static/img/stacks/jest.svg";
import c_sharp from "../public/static/img/stacks/c_sharp.svg";

export const stackData = [
  { title: "HTML", img: FaHtml5 },
  { title: "CSS", img: FaCss3Alt },
  { title: "JavaScript", img: FaJs },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: FaPython },
  // { title: "C#", img: c_sharp },
  // { title: "PHP", img:  SiPhp },
  { title: "Scratch", img: SiScratch },
  { title: "Node", img: Node },
  { title: "React", img: FaReact },
  { title: "Express", img: SiExpress },
  // { title: "Vue", img: RiVuejsFill },
  { title: "Django", img: SiDjango },
  { title: "PostgreSQL", img: Postgles },
  { title: "Sqlite", img: SiSqlite },
  { title: "Git", img: FaGitAlt },
  { title: "GitHub", img: FaGithub },
  { title: "JSON", img: SiJson },
  { title: "WSL", img: VscTerminalLinux },
  { title: "Ubuntu", img: GrUbuntu },
  { title: "Styled Components", img: styled },
  { title: "Jest", img: jest },
  { title: "Zod", img: RiVipDiamondFill },
  { title: "Photoshop", img: SiAdobephotoshop  },
  { title: "Photopea", img: SiPhotopea },
];
