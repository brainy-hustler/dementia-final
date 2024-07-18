import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".././globals.css";

// Material UI Font imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Material UI Components
import MenuAppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dementia Defenders",
  description:
    "Dementia Defenders is a platform for people with dementia to play games and watch videos to improve their cognitive abilities.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className={inter.className}>
        <MenuAppBar />
        {children}
      </div>
  );
}
