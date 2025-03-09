"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linkData =[
    {
        title: "Performance",
        href: "/performance",
    },
    {
        title: "Reliability",
        href: "/reliability",
    },
    {
        title: "Scale",
        href: "/scale",
    },

]
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between contain-content mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'text-blue-500' : 'text-white'}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
