import { FaCss3Alt as cssIcon } from "react-icons/fa";
import {} from "react-icons/bs";
import {
  IoLogoJavascript as jsIcon,
  IoDocumentSharp as docIcon,
} from "react-icons/io5";
import { DiJavascript as htmlIcon, DiReact as reactIcon } from "react-icons/di";
import {
  SiTypescript as tsIcon,
  SiJson as jsonIcon,
  SiGitignoredotio as gitIgnoreIcon,
  SiDotenv as envIcon,
} from "react-icons/si";
import { IconType } from "react-icons";

const fileIcons: FileIconsType = {
  html: {
    component: htmlIcon,
    color: "#e34c26",
  },
  css: {
    component: cssIcon,
    color: "#264de4",
  },
  js: {
    component: jsIcon,
    color: "#f0db4f",
  },
  ts: {
    component: tsIcon,
    color: "#007acc",
  },
  tsx: {
    component: tsIcon,
    color: "#007acc",
  },
  jsx: {
    component: reactIcon,
    color: "#61dafb",
  },
  json: {
    component: jsonIcon,
    color: "#000000",
  },
  gitignore: {
    component: gitIgnoreIcon,
    color: "#f34f29",
  },
  env: {
    component: envIcon,
    color: "#f0db4f",
  },
  default: {
    component: docIcon,
    color: "#000000",
  },
};

type IconObjectType = {
  component: IconType;
  color: string;
};

type FileIconsType = {
  html: IconObjectType;
  css: IconObjectType;
  js: IconObjectType;
  ts: IconObjectType;
  tsx: IconObjectType;
  jsx: IconObjectType;
  json: IconObjectType;
  gitignore: IconObjectType;
  default: IconObjectType;
  env: IconObjectType;
  [key: string]: IconObjectType;
};

export default fileIcons;
