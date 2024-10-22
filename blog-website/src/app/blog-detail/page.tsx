"use client"
// // app/blog/[slug].js
import { useParams } from 'next/navigation';
import Cards from '@/components/cards';

export default function Blog(){
    return (
        <>
         <h1>I am blog Detail</h1>
         
        </>
    )
}







// const data = [
//   {
//     img: "https://m.media-amazon.com/images/I/81UcJ68zOuL.jpg",
//     Title: "Ai Book",
//     dis: "The Rise of AI: Transforming Our World Artificial Intelligence (AI) is no longer just a concept from science fiction...",
//     slug: "ai-book"
//   },
//   {
//     img: "https://miro.medium.com/v2/resize:fit:1354/0*PsYVjTk-F17_ZJ1d",
//     Title: "Html & Css",
//     dis: "The Dynamic Duo: HTML and CSS in Web Development...",
//     slug: "html-css"
//   },
//   {
//     img: "https://www.londonlibrary.co.uk/images/20210408113322.JPG",
//     Title: "What is Books",
//     dis: "The Timeless Treasure: What Are Books?...",
//     slug: "what-is-books"
//   },
//   {
//     img: "https://www.fedpo.com/images/TheWholeWorldOver/01TheWholeWorldOver.jpg",
//     Title: "Whole World",
//     dis: "The Whole World: A Tapestry of Diversity...",
//     slug: "whole-world"
//   },
//   {
//     img: "https://paramountbooks.com.pk/wp-content/uploads/2023/10/9789692109161.jpg",
//     Title: "Eyes",
//     dis: "The Window to the Soul: The Power of Eyes...",
//     slug: "eyes"
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEJhOQhMy_cPTFi-dttHURDJCa9cGRiTPtw&s",
//     Title: "Computer",
//     dis: "The Modern Marvel: Embracing the Power of Computers...",
//     slug: "computer"
//   }
// ];

// export default function BlogDetail() {
//   const { slug } = useParams();

//   // Find the specific blog based on the slug
//   const blog = data.find((item) => item.slug === slug);

//   if (!blog) {
//     return <h1>Blog not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{blog.Title}</h1>
//       <img src={blog.img} alt={blog.Title} style={{ width: "100%", height: "auto" }} />
//       <p>{blog.dis}</p>
//     </div>
//   );
// }

