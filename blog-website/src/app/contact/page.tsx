import Style from '@/app/contact/style.module.css'
// import Hero from '@/components/Hero'

export default function Contact(){
    return(
        <>
        {/* <Hero/> */}
        <div className={Style.mainTag}>
            <h1 >Contact Form</h1>
            <div className={Style.formContent}>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Phone' />
                <input type="text" placeholder='Your Email' />
                <textarea className={Style.message} rows={3} placeholder='Message' id=""></textarea>
                <button className={Style.subBtn}> SUBMIT </button>
            </div>
        </div>
        </>
    )
}