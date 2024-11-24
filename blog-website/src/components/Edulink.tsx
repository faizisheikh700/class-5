"use client"
import Link from "next/link"
import { useState } from "react"
export default function ProfileBar(){

    const [edu, setEdu] = useState<any>(<div>
      <h1>Welcome to My Page</h1>
      <h2>Introduction</h2>
      <p>This is the initial content displayed when the app loads.</p>
    </div>)
    const [exp, setExp] = useState<any>(true)
    const [other, setOther] = useState<any>(true)
    const [hob, setHob] = useState<any>(true)
    
    const handleClick = () =>{
      setEdu(<div>
        <h1>Welcome to My Page</h1>
        <h2>Introduction</h2>
        <p>This is the initial content displayed when the app loads.</p>
      </div>)
      setExp(false)
      setOther(false)
      setHob(false)
  }



    const handleExp = () =>{
      setExp("Experience")
      setEdu(false)
      setOther(false)
      setHob(false)
      
  }




    const handleOther = () =>{
      setOther("Certification")
      setEdu(false)
      setExp(false)
      setHob(false)
  }




    const handleHob = () =>{
      setHob("Hobbies")
      setEdu(false)
      setOther(false)
      setExp(false)
  }




    return (
        <>
         <ul>
            <Link
              href={""}>
              <li onClick={()=>handleClick()}>Education</li>
            </Link>
            <Link href={""}>
              <li onClick={()=>handleExp()}>Experience</li>
            </Link>
            <Link href={" "}>
              <li onClick={()=>handleOther()}>Other Certification</li>
            </Link>
            <Link href={" "}>
              <li onClick={()=>handleHob()}>Hobbies</li>

            </Link>
          </ul>

          <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{edu}</h1>
          </div>

          <div>
           <h1> {exp}</h1>
          </div>


          <div>
           <h1> {other}</h1>
          </div>


          <div>
           <h1> {hob}</h1>
          </div>
        </>
    )
}