import React, { useState, useEffect } from "react";
import Navrr from "./Components/Navrr.jsx";
import Banner from "./Components/Banner";
import Magazine from "./Components/Magazine";
import Footer from "./Components/Footer";
// import styles from "./styles.css";
import InternationalBrands from "./Components/InternationalBrands";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Categories from "./Components/Categories";
import MenBestsellers from "./Components/MenBestsellers";
import KidsBestsellers from "./Components/KidsBestsellers";
import WomenBestsellers from "./Components/WomenBestsellers";
import Header from "./Components/Header";
import FlashDeals from "./Components/FlashDeals";
import Categorie from "./Components/Categorie";
import Outro from "./Components/Outro";
import Shop from "./Components/Shop";
import Tales from "./Components/Tales";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Navmobile from "./Components/Navmobile";
import Banner2 from "./Components/Banner2";
import Banner1 from "./Components/Banner1";
import Banner3 from "./Components/Banner3";
import Favicon from "react-favicon";
import Newsletter from "./Components/Newsletter";
import Scrolltotop from "./Components/Scrolltotop";
//import drop from "./Components/Dropdown";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWindowResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      {screenWidth > 1000 ? <Navrr /> : <Navmobile />}
      {/* <Categories /> */}
      <Favicon url="./assets/logo.png"></Favicon>

      <Banner />
      <drop />
      <InternationalBrands />
      <Magazine />
      <Services />
      <FlashDeals />
      <Tales />
      <MenBestsellers />
      <Banner1 />
      <WomenBestsellers />
      <Banner2 />
      <KidsBestsellers />
      <Banner3 />
      <Header />
      <Shop />
      <Categorie />
      <Intro />
      <Outro />
      <Newsletter />
      <Scrolltotop />
      <Footer />
    </>
  );
};

export default App;
