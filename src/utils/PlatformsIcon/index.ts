import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaApple,
  FaComputer,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaMobileButton,
} from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { SiAtari, SiSega } from "react-icons/si";

export const platformsIconList = [
  { id: 1, name: "PC", reactIcon: FaComputer },
  { id: 2, name: "PlayStation", reactIcon: FaPlaystation },
  { id: 3, name: "Xbox", reactIcon: FaXbox },
  { id: 4, name: "iOS", reactIcon: FaApple },
  { id: 8, name: "Android", reactIcon: IoLogoAndroid },
  { id: 6, name: "Linux", reactIcon: FaLinux },
  { id: 7, name: "Nintendo", reactIcon: BsNintendoSwitch },
  { id: 9, name: "Atari", reactIcon: SiAtari },
  { id: 11, name: "SEGA", reactIcon: SiSega },
  { id: 98, name: "Mobile", reactIcon: FaMobileButton },
  { id: 99, name: "Desktop", reactIcon: FaComputer },
];
