import Link from "next/link"
// import { GiHamburgerMenu } from "react-icons/gi";


export default function Head() {
  return (
      <>
      <div className="navbar">
        <div className="companyLogo">
          <h1 className="logoName">BOOKS LIBRARY.<span className="slogan"><em>READ MORE LEAD MORE</em></span> </h1>
          {/* <GiHamburgerMenu className="hum"/> */}
         </div>
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
      </div>
      
      </>
  )
  
}