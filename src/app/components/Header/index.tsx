import Link from "next/link";
import Switch from "../Switch";

export default function Header() {
  return (
    <header className="w-full py-5  sticky top-0 z-10 shadow-sm bg-white text-black dark:text-white dark:bg-gray-900">
      <div className="container flex justify-between">
        <Link href="/">
          <span className="text-xl font-bold">Where is the world?</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Switch />
        </div>
      </div>
    </header>
  );
}
