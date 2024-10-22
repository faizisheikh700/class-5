"use client";

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import Sidemanu from "./Sidemanu";
import { useState } from "react";

export default function Head() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar = function () {
    setShowSideBar(!showSideBar);

  };

  return (
    <>
      <div className=" navbar relative">
        <Logo />

        <Sidemanu onShow={handleShowSideBar} showSideBar={showSideBar} />

      <div>
        
          <ul className="head">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link href={"/write-blog"}>
              <li>Write Blog</li>
            </Link>
          </ul>
        
        <button onClick={handleShowSideBar}>
          <GiHamburgerMenu className="hum" />
        </button>
      </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="companyLogo">
        <h1 className="logoName">
          BOOKS LIBRARY.
          <span className="slogan">
            <em>READ MORE LEAD MORE</em>
          </span>
        </h1>
      </div>
    </>
  );
}
