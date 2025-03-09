import type { Metadata } from "next";
import Header from "@/components/header";



export const metadata: Metadata = {
  title: "hero-app",
  description: "hero-app",
};

/**
 * 根layout
 * @param param0
 * @returns
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
