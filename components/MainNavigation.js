import Link from "next/link";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex justify-center bg-white/50">
      <nav className="w-4/5 h-full flex justify-between items-center">
        <div className="font-Cinzel font-bold text-xl">
          <Link href="/">NOBLE NAUTILUS</Link>
        </div>
        <ul className="flex gap-x-5">
          <li className="hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/members">Members</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
