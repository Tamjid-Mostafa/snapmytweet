import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default Layout;
