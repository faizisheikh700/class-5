import style from "./Sidemanu.module.css";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
export default function Sidemanu({ onShow, showSideBar }:any) {
  return (
    <div
      className={`${style.container} ${ !showSideBar ? style.barOut : style.barIn}`}>
      <nav className={style.linkBox}>
        <div className={style.iconBox}>
          <button onClick={onShow}>
            <RxCross1 className="text-xl" />
          </button>
        </div>
        <ul className={style.linkList}>
          <li>
            <Link href={"/"} className={style.navLinks}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={style.navLinks}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={style.navLinks}>
              Contact
            </Link>
          </li>
          <li>
            <Link href={"write-blog"} className={style.navLinks}>
              Write Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
