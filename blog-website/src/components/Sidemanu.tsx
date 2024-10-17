import Link from "next/link"

export default function Sidemanu() {
    return(
        <>
        <div className="sideContainer">
        <div className="sideManu">
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
      
        </div>
        </>
    )
}