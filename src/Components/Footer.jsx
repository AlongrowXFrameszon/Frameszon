import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBell
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";
// import ScrollToTop from "react-scroll-to-top";
import logo from './assets/logo.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div
          id="ContactUs"
          className="FooterMainContainer"
        >
          <div className="FooterContainer">
            {/* footer title */}
            <div className="footer1strow">
              <img
                src={logo}
                alt="logo"
              />
            </div>

            <div className="footer2ndrow">
              {/*1st colmn shop catagories */}
              <div className="footer2ndrow1st">
                <div className="footer2ndrow1stContent">
                  <a href="#AboutUs">
                    <span>About Us</span>
                  </a>
                  <a href="#MenBestsellers">
                    <span>Men</span>
                  </a>
                  <a href="#WomenBestsellers">
                    <span>Women</span>
                  </a>
                  <a href="#InternationalBrands">
                    <span>International Brands</span>
                  </a>
                  <a href="#Banner">
                    <span>Offers</span>
                  </a>
                  <a href="#Categories">
                    <div className="flex font-semibold hover:bg-white hover:text-slate-500 hover:border-slate-500 hover:border-2 justify-center items-center text-sm text-white bg-slate-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-2 transition-all">
                      SHOP CATEGORIES
                    </div>
                  </a>
                </div>
              </div>
              {/* 2nd colmn */}
              <div className="footer2ndrow2nd">Corporate</div>
              {/* 3rd colmn */}
              <div className="footer2ndrow3rd">Help</div>

              {/* 4th colm */}
              <div className="footer2nd4thcolmn">
                <div className="footer2ndrow4thcolmnAdd">
                  {/* Address */}
                  <a href="https://goo.gl/maps/Yrp33mok4ph5vLrs7">
                    <div className="StoreLocation">
                      <span>Store Location</span>
                      <span>
                        C-1, Block C, Connaught place, Opp. PVR Plaza
                      </span>
                      <span >
                        New Delhi, Delhi - 110001, India
                      </span>
                    </div>
                  </a>

                  {/* contact us */}
                  <div className="footer4thcolmnCont">
                    <span>Contact Us</span>
                    {/* <p>
            Email:{" "}
            <span className="font-bold text-slate-500">support@domain.com</span>
          </p> */}
                    <div className="footerPhoneNumber">
                      Phone: 
                      <a href="tel:+918287751494">
                        <span>+918287751494</span>
                      </a>

                      <a href="tel:+917982610896">
                        <span>+917982610896</span>
                      </a>
                    </div>
                  </div>
                  {/* social media icons */}
                  <div className="footer4thcolmnSoc">
                    <FaTwitter className="t" />
                    <a href="https://www.instagram.com/frameszon/">
                      <FaInstagram className="t" />
                    </a>
                    <FaFacebook className="t" />
                    <FaYoutube className="t" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr 
         width="100%"
        align="center"/>

          <div className="FooterAlongGrow">
            Developed with ❤ by @Alongrow
          </div>

          <div className="FooterRound1"></div>
          <div className="FooterRound2"></div>
          <div className="FooterRound3"></div>
          <div className="FooterRound4"></div>
          <div className="FooterRound5"></div>
          {/* all rights reserved */}
          <div className="FooterCopyright">
            <span>
              {new Date().getFullYear()} @Frameszon. All rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;