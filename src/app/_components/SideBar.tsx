import Image from "next/image";
import Link from "next/link";
const SideBar = () => {
  return (
    <div
      id="sidebar"
      className="bg-gradient-to-br fixed from-black via-black to-gray-600 z-50 w-full h-screen text-white p-10 space-y-10 hidden ease-in-out duration-500"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            loading="lazy"
            className="h-[26px] object-contain"
            src="/images/icx-navbar-logo.webp"
            alt="icx-logo"
            width={100}
            height={40}
          />
        </Link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <menu className="flex flex-col justify-between h-[85vh]">
        <div className="flex flex-col space-y-10 items-start">
          <button className="text-md">Pendanaan</button>
          <button className="text-md">Projek</button>
          <button className="text-md">ICX Pasti</button>
          <button className="text-md">Tentang Kami</button>
          <button className="text-md">ICX Connect</button>
          <button className="text-md">Blog</button>
          <Link href="/create-pin">
            <p className="text-sm text-brand-500 border-b border-brand-400">
              Lengkapi Profile Anda.
            </p>
          </Link>
        </div>
        <div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default SideBar;
