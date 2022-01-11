import React from "react";
import Header from "../Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "components/Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      <div className="mt-40">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
