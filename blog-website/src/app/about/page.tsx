import Style from "@/app/about/style.module.css";
// import Link from "next/link";
// import Education from "./education/page";
import ProfileBar from "@/components/Edulink";
export default function About() {
  return (
    <>
      {/* <h1>i am about</h1> */}
      <div className={Style.abPareCon}>
        <div className={Style.abChildCon}>
          <div className={Style.image}>
            {/* <Image
      src=""
      width={500}
      height={500}
      alt="Picture of the author"
      /> */}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            atque mollitia enim veritatis fuga, nam tempora incidunt nesciunt!
            Quas ratione molestias vero iste id quam eius aperiam culpa
            voluptate autem.
          </p>
          <div className={Style.socialMedia}>
            <h1>
              Facbook: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              Instagram: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              X(Tweeter): <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              Thread: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              Linkedin: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              Github: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
            <h1>
              WhatsApp: <a href="facebook.com"> Faizan Sheikh</a>
            </h1>
          </div>
        </div>
        <div className={Style.dataContent}>
         
        <ProfileBar/>
        </div>
      </div>
        {/* <Education/> */}
    </>
  );
}
