import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer/>
    </main>
  );
};

export default Layout;
