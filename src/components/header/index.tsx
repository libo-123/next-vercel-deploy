"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

const accessLink = ['/','/performance', '/reliability', '/scale'];
const Header = () => {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    setShouldRender(accessLink.includes(pathname || ''));
  }, [pathname]);

  // 不能直接写，会导致服务端与客户端数据不一致
  if (!shouldRender) {
    return null;
  }
  
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
