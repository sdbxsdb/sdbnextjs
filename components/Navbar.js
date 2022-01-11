import Link from "next/link";
import Image from "next/image";
import useDarkMode from "../useDarkMode";
import Head from "next/head";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();


  return (
    <nav className="mb-12 pt-8 border-b">
      <div className="w-full flex justify-center">
        <Link href="/">
          <a className="flex flex-col justify-center items-center">
            <h1>Sam Donaghy-Bell | CV</h1>
            <Image src="/sam_avatar_no_bg.png" width="83" height="79" />
            <video src="/avatarVideo.mov"></video>
          </a>
        </Link>
      </div>
      <div className="w-full my-6 flex justify-center">
        <div className="flex gap-x-12">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
        </div>

        <button className="darkLightMode absolute top-10 right-10">
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
