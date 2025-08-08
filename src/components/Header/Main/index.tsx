import Image from "next/image";
import Link from "next/link";
import ContainerAlign from "../../ContainerAlign";

import Navbar from "../Navbar";

export default function Header() {
  return (
    <>
      <ContainerAlign extraClass="flex p-4 items-center justify-center">
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
      </ContainerAlign>
    </>
  );
}
