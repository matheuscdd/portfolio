import { 
  SiScratch, 
  SiTypescript, 
  SiSqlite, 
  SiDjango, 
  SiExpress,
  SiPhotopea,
  SiAdobephotoshop, 
  SiPhp,
  SiPrisma,
  SiTypeorm, 
  SiSelenium,
  SiGnubash,
  SiGithubactions,
  SiPandas,
  SiLetsencrypt,
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
  FaAws,
  FaGitAlt,
  FaDocker,
  FaRobot,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { RiVuejsFill, RiVipDiamondFill } from "react-icons/ri";
import Postgles from "../public/static/img/stacks/postgles.svg";
import Node from "../public/static/img/stacks/node.svg";
import styled from "../public/static/img/stacks/styled.svg";
import jest from "../public/static/img/stacks/jest.svg";
import s3 from "../public/static/img/stacks/s3.svg";
import { 
  BsTranslate, 
  BsFillFileEarmarkPdfFill 
} from "react-icons/bs";
import { iSegment } from "./types";
import { IoIosMail } from "react-icons/io";
import { 
  TbBrandLaravel,
  TbBrandGolang,
} from "react-icons/tb";
import { FaFlaskVial, FaServer } from "react-icons/fa6";
import { TiKey } from "react-icons/ti";

export const languages: iSegment = Object.freeze([
  { title: "HTML", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "JavaScript", icon: FaJs },
  { title: "TypeScript", icon: SiTypescript },
  { title: "Python", icon: FaPython },
  { title: "Go", icon: TbBrandGolang },
  { title: "PHP", icon:  SiPhp },
  { title: "ShellScript", icon: SiGnubash  },
  { title: "Scratch", icon: SiScratch },
]);

export const dbs: iSegment = Object.freeze([
  { title: "PostgreSQL", icon: Postgles },
  { title: "MongoDB", icon:  BiLogoMongodb },
  { title: "S3", icon:  s3 },
  { title: "Sqlite", icon: SiSqlite },
]);

export const frameworks: iSegment = Object.freeze([
  { title: "Node", icon: Node },
  { title: "Laravel", icon: TbBrandLaravel },
  { title: "Vue", icon: RiVuejsFill },
  { title: "React", icon: FaReact },
  { title: "Express", icon: SiExpress },
  { title: "Django", icon: SiDjango },
]);

export const infrastructure: iSegment = Object.freeze([
  { title: "Docker", icon:  FaDocker  },
  { title: "AWS", icon: FaAws },
  { title: "Linux", icon: VscTerminalLinux },
  { title: "Ubuntu", icon: GrUbuntu },
  { title: "Github Actions CI/CD", icon: SiGithubactions  },
  { title: "SSH", icon:  TiKey  },
  { title: "Certbot SSL", icon: SiLetsencrypt },
]);

export const complementary: iSegment = Object.freeze([
  { title: "Git", icon: FaGitAlt },
  { title: "GitHub", icon: FaGithub },
  { title: "Selenium", icon: SiSelenium  },
  { title: "Prisma ORM", icon: SiPrisma },
  { title: "TypeORM", icon: SiTypeorm },
  { title: "Pandas", icon: SiPandas },  
  { title: "GNU Gettext", icon: BsTranslate  },
  { title: "Styled Components", icon: styled },
  { title: "Jest", icon: jest },
  { title: "Zod", icon: RiVipDiamondFill },
  { title: "Photoshop", icon: SiAdobephotoshop  },
  { title: "Photopea", icon: SiPhotopea },
  { title: "Testes Automatizados", icon: FaFlaskVial },
  { title: "Microserviços", icon: FaServer },
  { title: "Geração de PDFs Estilizados e Automatizados", icon: BsFillFileEarmarkPdfFill  },
  { title: "Automatizações de Emails", icon: IoIosMail },
  { title: "Automatizações de Scripts Crontab", icon:  FaRobot  },
]);
