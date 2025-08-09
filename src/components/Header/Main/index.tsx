import Navbar from "../Navbar";

export default function Header() {
  return (
    <div className="fixed z-90 flex h-20 w-full items-center justify-center">
      <div className="xl:hidden">
        <Navbar />
      </div>
      <div className="flex h-20 w-20 items-center justify-center">
        <img
          src="/logo.webp"
          alt="logo da playbox"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
