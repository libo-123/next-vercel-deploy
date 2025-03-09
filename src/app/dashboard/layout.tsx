"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linkData = [
  {
    name: "关于",
    path: "/dashboard/about",
  },
  {
    name: "设置",
    path: "/dashboard/setting",
  },
];
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState(0);
  const pathname = usePathname();
  return (
    <div className="dashboard-layout border-2 border-dashed border-black p-4 w-1/2 mt-4">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map(item => (
          <Link key={item.path} className={pathname === item.path ? "text-purple-500" : ""} href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
      <h2>dashbord-layout-state: {state}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setState(state + 1)}>
        increment
      </button>
      {children}
    </div>
  );
}
