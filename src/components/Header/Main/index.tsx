import Image from "next/image";
import Link from "next/link";
import ButtonNav from "../NavButton";
import ContainerAlign from "../../ContainerAlign";

import Navbar from "../Navbar";

export default function Header() {
  return (
    <header>
      <ContainerAlign extraClass="flex p-4 items-center justify-center">
        <Navbar />
        <Link href="/">
          <div className="relative h-[50px] w-[110px]">
            <Image
              src="/logo.webp"
              alt="logo da playbox"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        {/* <nav className="flex text-lg font-bold text-white">
        <ButtonNav contentText="Home" href="/" />
        <ButtonNav contentText="Games" href="library" />
        <ButtonNav contentText="Community" href="community" />
        <ButtonNav contentText="News" href="news" />
      </nav> */}
      </ContainerAlign>
    </header>
  );
}
