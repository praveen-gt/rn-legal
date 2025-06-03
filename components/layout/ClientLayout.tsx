"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import ScrollToTopButton from "./ScrollToTop/page";
import dynamic from "next/dynamic";

interface Props {
  children: React.ReactNode;
}

const DisclaimerPopup = dynamic(() => import("@/components/ui/DisclaimerPopup"), {
  ssr: false,
});

const ClientLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", updateHeaderHeight);

    updateHeaderHeight(); // Set initial height on load

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: headerHeight }}>
        <DisclaimerPopup />
        {children}
        <Footer />
        {/* <ScrollToTopButton /> */}
      </div>
    </>
  );
};

export default ClientLayout;
