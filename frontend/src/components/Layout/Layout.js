import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
