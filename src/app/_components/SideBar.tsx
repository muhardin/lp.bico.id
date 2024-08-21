"use client";
import Image from "next/image";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            loading="lazy"
            className="h-[60px] object-contain"
            src="/images/logo.png"
            alt="icx-logo"
            width={100}
            height={40}
          />
        </Link>
        {/* <button>
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
        </button> */}
      </div>
      <menu className="flex flex-col justify-between h-[85vh] mt-8">
        <div className="flex flex-col space-y-10 items-start text-white">
          <button className="text-md">Pendanaan</button>
          <button className="text-md">Projek</button>
          <button className="text-md">BICO Pasti</button>
          <button className="text-md">Tentang Kami</button>
          <button className="text-md">BICO Connect</button>
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
