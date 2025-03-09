import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div className="grid p-4">
       我是主页面
    </div>
  );
}
