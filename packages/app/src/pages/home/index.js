import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

import About from "./about";
// import AboutBeta from "./about-beta";
import Footer from "../../components/footer";
import A11yHeader from "../../components/a11yheader";
import HomeHeader from "./header";
import Schedule from "./schedule";
import FAQ from "./faq";
import LiveNow from "./live-now";
import Sponsors from "./sponsors";
import GoToTop from "../../components/go-to-top";
// import Stats from "./stats";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <main className="home" role="main">
      <div>
        <A11yHeader/>
        {/* <LiveNow /> */}
        <HomeHeader user={user} />
        {/* <Stats /> */}
        <div id="conteudo">
            <About />
        </div>
        <Schedule />
        {/* <AboutBeta /> */}
        <Sponsors />
        <FAQ />
        <GoToTop />
        <Footer />
      </div>
    </main>
  );
}
export default Home;
