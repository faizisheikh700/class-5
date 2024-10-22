
import Link from "next/link"
export default function ProfileBar(){
    return (
        <>
         <ul>
            <Link
              href={""}>
              <li>Education</li>
            </Link>
            <Link href={"../about/education"}>
              <li>Experience</li>
            </Link>
            <Link href={" "}>
              <li>Other Certification</li>
            </Link>
            <Link href={" "}>
              <li>Hobbies</li>

            </Link>
          </ul>
        </>
    )
}