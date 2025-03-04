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
  SiPandas,
  SiLetsencrypt,
  SiPlotly,
  SiChartdotjs,
  SiJquery,
  SiVuetify,
  SiNestjs,
  SiNginx,
  SiPydantic,
  SiMinio,
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
  FaPalette,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { RiVuejsFill, RiVipDiamondFill, RiTerminalBoxFill } from "react-icons/ri";
import Postgles from "../public/static/img/stacks/postgles.svg";
import Node from "../public/static/img/stacks/node.svg";
import CSharp from "../public/static/img/stacks/c_sharp.svg";
import MsSql from "../public/static/img/stacks/mssql.svg";
import styled from "../public/static/img/stacks/styled.svg";
import jest from "../public/static/img/stacks/jest.svg";
import { GiGorilla } from "react-icons/gi";
import s3 from "../public/static/img/stacks/s3.svg";
import flask from "../public/static/img/stacks/flask.svg";
import { DiDotnet } from "react-icons/di";
import { 
  BsTranslate, 
  BsFillFileEarmarkPdfFill 
} from "react-icons/bs";
import { iSegment } from "./types";
import { IoIosMail } from "react-icons/io";
import { 
  TbBrandLaravel,
  TbBrandGolang,
  TbBrandRedux,
} from "react-icons/tb";
import { 
  FaFlaskVial,
  FaServer,
  FaBootstrap,
  FaVault,
  FaCloud,
  FaChrome,
} from "react-icons/fa6";

export const languages: iSegment = Object.freeze([
  { title: "HTML", icon: FaHtml5, color: "#f7621d", filter: "brightness(0) saturate(100%) invert(45%) sepia(32%) saturate(4551%) hue-rotate(351deg) brightness(101%) contrast(94%)" },
  { title: "CSS", icon: FaCss3Alt, color: "#2091eb", filter: "brightness(0) saturate(100%) invert(49%) sepia(89%) saturate(2194%) hue-rotate(183deg) brightness(94%) contrast(96%)" },
  { title: "JavaScript", icon: FaJs, color: "#f7f700", filter: "brightness(0) saturate(100%) invert(89%) sepia(35%) saturate(2289%) hue-rotate(7deg) brightness(105%) contrast(106%)" },
  { title: "TypeScript", icon: SiTypescript, color: "#0076c6", filter: "brightness(0) saturate(100%) invert(33%) sepia(20%) saturate(4944%) hue-rotate(180deg) brightness(99%) contrast(103%)" },
  { title: "PHP", icon:  SiPhp, color: "#7377ad", filter: "brightness(0) saturate(100%) invert(56%) sepia(6%) saturate(2368%) hue-rotate(198deg) brightness(84%) contrast(94%)" },
  { title: "Python", icon: FaPython, color: "#4f87ba", filter: "brightness(0) saturate(100%) invert(50%) sepia(6%) saturate(3441%) hue-rotate(167deg) brightness(98%) contrast(91%)" },
  { title: "ShellScript", icon: SiGnubash , color: "#38ab48", filter: "brightness(0) saturate(100%) invert(63%) sepia(13%) saturate(2426%) hue-rotate(77deg) brightness(86%) contrast(78%)" },
  { title: "Go", icon: TbBrandGolang, color: "#00a7d0", filter: "brightness(0) saturate(100%) invert(63%) sepia(69%) saturate(5191%) hue-rotate(159deg) brightness(96%) contrast(101%)" },
  { title: "C#", icon: CSharp , color: "#ff01ff", filter: "brightness(0) saturate(100%) invert(20%) sepia(82%) saturate(3587%) hue-rotate(292deg) brightness(114%) contrast(133%)" },
  { title: "Scratch", icon: SiScratch, color: "#f7a618", filter: "brightness(0) saturate(100%) invert(68%) sepia(56%) saturate(1012%) hue-rotate(348deg) brightness(99%) contrast(95%)" },
]);

export const dbs: iSegment = Object.freeze([
  { title: "MongoDB", icon:  BiLogoMongodb, color: "#48a23a", filter: "brightness(0) saturate(100%) invert(56%) sepia(10%) saturate(2732%) hue-rotate(66deg) brightness(94%) contrast(91%)" },
  { title: "PostgreSQL", icon: Postgles, color: "#067dff", filter: "brightness(0) saturate(100%) invert(48%) sepia(55%) saturate(6854%) hue-rotate(198deg) brightness(99%) contrast(102%)" },
  { title: "Sqlite", icon: SiSqlite, color: "#72bde4", filter: "brightness(0) saturate(100%) invert(68%) sepia(57%) saturate(386%) hue-rotate(165deg) brightness(96%) contrast(87%)" },
  { title: "S3", icon: s3, color: "#22d825", filter: "brightness(0) saturate(100%) invert(82%) sepia(71%) saturate(5504%) hue-rotate(56deg) brightness(80%) contrast(117%)" },
  { title: "SQL Server", icon: MsSql, color: "#f72c1f", filter: "brightness(0) saturate(100%) invert(30%) sepia(67%) saturate(5212%) hue-rotate(349deg) brightness(96%) contrast(101%)" },
]);

export const frameworks: iSegment = Object.freeze([
  { title: "Node", icon: Node, color: "#22d825", filter: "brightness(0) saturate(100%) invert(82%) sepia(71%) saturate(5504%) hue-rotate(56deg) brightness(80%) contrast(117%)" },
  { title: "Nest", icon: SiNestjs, color: "#d8224d", filter: "brightness(0) saturate(100%) invert(46%) sepia(93%) saturate(7313%) hue-rotate(334deg) brightness(88%) contrast(91%)" },
  { title: "Vue", icon: RiVuejsFill, color: "#3fb27f", filter: "brightness(0) saturate(100%) invert(56%) sepia(43%) saturate(551%) hue-rotate(101deg) brightness(98%) contrast(86%)" },
  { title: "Laravel", icon: TbBrandLaravel, color: "#f72c1f", filter: "brightness(0) saturate(100%) invert(30%) sepia(67%) saturate(5212%) hue-rotate(349deg) brightness(96%) contrast(101%)" },
  { title: "React", icon: FaReact, color: "#67d4f3", filter: "brightness(0) saturate(100%) invert(70%) sepia(66%) saturate(387%) hue-rotate(157deg) brightness(98%) contrast(94%)" },
  { title: "Express", icon: SiExpress, color: "#f39404", filter: "brightness(0) saturate(100%) invert(48%) sepia(100%) saturate(1937%) hue-rotate(14deg) brightness(113%) contrast(97%)" },
  { title: "Django", icon: SiDjango, color: "#2aa473", filter: "brightness(0) saturate(100%) invert(52%) sepia(34%) saturate(729%) hue-rotate(104deg) brightness(95%) contrast(97%)" },
  { title: "Flask", icon: flask, color: "#adff01", filter: "brightness(0) saturate(100%) invert(71%) sepia(98%) saturate(613%) hue-rotate(28deg) brightness(111%) contrast(101%)" },
  { title: "ASP.NET", icon: DiDotnet, color: "#3abfee", filter: "brightness(0) saturate(100%) invert(70%) sepia(18%) saturate(4948%) hue-rotate(164deg) brightness(102%) contrast(87%)" },
]);

export const infrastructure: iSegment = Object.freeze([
  { title: "Docker", icon:  FaDocker , color: "#0997e5", filter: "brightness(0) saturate(100%) invert(39%) sepia(80%) saturate(2171%) hue-rotate(177deg) brightness(100%) contrast(93%)" },
  { title: "AWS", icon: FaAws, color: "#f79400", filter: "brightness(0) saturate(100%) invert(72%) sepia(82%) saturate(3158%) hue-rotate(359deg) brightness(95%) contrast(104%)" },
  { title: "Nginx", icon: SiNginx, color: "#019137", filter: "brightness(0) saturate(100%) invert(28%) sepia(96%) saturate(1485%) hue-rotate(125deg) brightness(96%) contrast(99%)" },
  { title: "Linux", icon: VscTerminalLinux, color: "#c4c4c4", filter: "brightness(0) saturate(100%) invert(84%) sepia(10%) saturate(0%) hue-rotate(156deg) brightness(97%) contrast(82%)" },
  { title: "MinIO", icon: SiMinio,  color: "#f72c1f", filter: "brightness(0) saturate(100%) invert(30%) sepia(67%) saturate(5212%) hue-rotate(349deg) brightness(96%) contrast(101%)"},
  { title: "Github Actions CI/CD", icon: FaCloud , color: "#ff01ff", filter: "brightness(0) saturate(100%) invert(20%) sepia(82%) saturate(3587%) hue-rotate(292deg) brightness(114%) contrast(133%)" },
  { title: "Ubuntu", icon: GrUbuntu, color: "#d64613", filter: "brightness(0) saturate(100%) invert(37%) sepia(55%) saturate(4850%) hue-rotate(357deg) brightness(88%) contrast(89%)" },
  { title: "Certbot SSL", icon: SiLetsencrypt, color: "#ffa401", filter: "brightness(0) saturate(100%) invert(58%) sepia(75%) saturate(660%) hue-rotate(358deg) brightness(102%) contrast(105%)" },
  { title: "SSH", icon:  RiTerminalBoxFill , color: "#9b1fe9", filter: "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(3793%) hue-rotate(272deg) brightness(92%) contrast(103%)" },
]);

export const complementary: iSegment = Object.freeze([
  { title: "Git", icon: FaGitAlt, color: "#e94e31", filter: "brightness(0) saturate(100%) invert(33%) sepia(80%) saturate(1668%) hue-rotate(345deg) brightness(97%) contrast(88%)" },
  { title: "GitHub", icon: FaGithub, color: "#9e9e9e", filter: "brightness(0) saturate(100%) invert(76%) sepia(0%) saturate(1655%) hue-rotate(158deg) brightness(84%) contrast(90%)" },
  { title: "Selenium", icon: SiSelenium , color: "#2bab32", filter: "brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(2101%) hue-rotate(73deg) brightness(98%) contrast(95%)" },
  { title: "JQuery", icon: SiJquery, color: "#0865a7", filter: "brightness(0) saturate(100%) invert(22%) sepia(72%) saturate(2393%) hue-rotate(187deg) brightness(96%) contrast(94%)" },
  { title: "Bootstrap", icon: FaBootstrap, color: "#8b12f5", filter: "brightness(0) saturate(100%) invert(22%) sepia(88%) saturate(5918%) hue-rotate(270deg) brightness(90%) contrast(115%)" }, 
  { title: "Prisma ORM", icon: SiPrisma, color: "#01ffa5", filter: "brightness(0) saturate(100%) invert(82%) sepia(75%) saturate(1061%) hue-rotate(81deg) brightness(100%) contrast(105%)" },
  { title: "TypeORM", icon: SiTypeorm, color: "#e33323", filter: "brightness(0) saturate(100%) invert(22%) sepia(53%) saturate(4856%) hue-rotate(353deg) brightness(96%) contrast(85%)" },
  { title: "Plotly.js", icon: SiPlotly, color: "#f84b85", filter: "brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(3661%) hue-rotate(313deg) brightness(99%) contrast(96%)" },  
  { title: "Chart.js", icon: SiChartdotjs, color: "#f6757b", filter: "brightness(0) saturate(100%) invert(59%) sepia(8%) saturate(3924%) hue-rotate(309deg) brightness(102%) contrast(93%)" }, 
  { title: "Pandas", icon: SiPandas, color: "#adff01", filter: "brightness(0) saturate(100%) invert(71%) sepia(98%) saturate(613%) hue-rotate(28deg) brightness(111%) contrast(101%)" },  
  { title: "Styled Components", icon: styled, color: "#fbc800", filter: "brightness(0) saturate(100%) invert(66%) sepia(80%) saturate(1065%) hue-rotate(7deg) brightness(104%) contrast(108%)" },
  { title: "Vuetify", icon: SiVuetify, color: "#a9d6f7", filter: "brightness(0) saturate(100%) invert(78%) sepia(14%) saturate(1080%) hue-rotate(179deg) brightness(105%) contrast(94%)" },
  { title: "Jest", icon: jest, color: "#bc1224", filter: "brightness(0) saturate(100%) invert(14%) sepia(92%) saturate(3460%) hue-rotate(343deg) brightness(88%) contrast(101%)" },
  { title: "Redux", icon: TbBrandRedux, color: "#6a3ab2", filter: "brightness(0) saturate(100%) invert(23%) sepia(20%) saturate(7500%) hue-rotate(251deg) brightness(95%) contrast(87%)" },
  { title: "Zod", icon: RiVipDiamondFill, color: "#2f64b2", filter: "brightness(0) saturate(100%) invert(37%) sepia(53%) saturate(690%) hue-rotate(176deg) brightness(90%) contrast(100%)" },
  { title: "Gorilla", icon: GiGorilla, color: "#ff01ff", filter: "brightness(0) saturate(100%) invert(20%) sepia(82%) saturate(3587%) hue-rotate(292deg) brightness(114%) contrast(133%)" },
  { title: "Pydantic", icon: SiPydantic, color: "#e92063", filter: "brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(2572%) hue-rotate(326deg) brightness(93%) contrast(96%)" },
  { title: "GNU Gettext", icon: BsTranslate , color: "#22d825", filter: "brightness(0) saturate(100%) invert(82%) sepia(71%) saturate(5504%) hue-rotate(56deg) brightness(80%) contrast(117%)" },
  { title: "Photoshop", icon: SiAdobephotoshop , color: "#00a4f7", filter: "brightness(0) saturate(100%) invert(58%) sepia(54%) saturate(5032%) hue-rotate(170deg) brightness(98%) contrast(102%)" },
  { title: "Photopea", icon: SiPhotopea, color: "#179f92", filter: "brightness(0) saturate(100%) invert(51%) sepia(50%) saturate(5880%) hue-rotate(148deg) brightness(96%) contrast(82%)" },
  { title: "Canvas HTML", icon: FaPalette, color: "#f70084", filter: "brightness(0) saturate(100%) invert(13%) sepia(85%) saturate(7485%) hue-rotate(321deg) brightness(97%) contrast(102%)" }, 
  { title: "Criação de extensões para Google Chrome", icon: FaChrome, color: "#9ebef2", filter: "brightness(0) saturate(100%) invert(84%) sepia(42%) saturate(2550%) hue-rotate(183deg) brightness(102%) contrast(90%)"  },
  { title: "Criptografia", icon: FaVault, color: "#b49fdc", filter: "brightness(0) saturate(100%) invert(70%) sepia(52%) saturate(478%) hue-rotate(209deg) brightness(90%) contrast(92%)" },
  { title: "Testes Automatizados", icon: FaFlaskVial, color: "#a5f8ce", filter: "brightness(0) saturate(100%) invert(94%) sepia(15%) saturate(839%) hue-rotate(77deg) brightness(100%) contrast(95%)" },
  { title: "Microserviços", icon: FaServer, color: "#f7d0e8", filter: "brightness(0) saturate(100%) invert(88%) sepia(20%) saturate(427%) hue-rotate(286deg) brightness(97%) contrast(100%)" },
  { title: "Geração de PDFs Estilizados e Automatizados", icon: BsFillFileEarmarkPdfFill , color: "#ff0101", filter: "brightness(0) saturate(100%) invert(24%) sepia(70%) saturate(5037%) hue-rotate(354deg) brightness(87%) contrast(136%)" },
  { title: "Automatizações de Emails", icon: IoIosMail, color: "#01ffbe", filter: "brightness(0) saturate(100%) invert(75%) sepia(16%) saturate(5243%) hue-rotate(110deg) brightness(106%) contrast(104%)" },
  { title: "Automatizações de Scripts Crontab", icon:  FaRobot , color: "#f197c0", filter: "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(654%) hue-rotate(291deg) brightness(107%) contrast(89%)" },
]);
