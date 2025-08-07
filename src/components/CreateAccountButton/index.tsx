import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/">
      <div className="border-blue-neon-light text-blue-neon-light hover:bg-blue-neon-light rounded-xl border-2 px-7 py-2 text-[0.8rem] transition-all duration-300 ease-in-out not-hover:animate-pulse hover:scale-105 hover:text-black hover:shadow-lg">
        Login/Create Account
      </div>
    </Link>
  );
}
