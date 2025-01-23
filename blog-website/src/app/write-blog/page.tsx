"use client"
// export default function Write(){
//     return(
//         <h1>i am write a blog</h1>
//     )
// }


import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { cardData } from '@/components/cards';

const BlogEditor = () => {
  const [content, setContent] = useState('');

  const handlePublish = () => {
    // const editorData = {
    //   data: content
    // }
cardData.push(

  {
    title: "Ai Book",
    id: "1",
    description: content.slice(3,-4),
    imgSrc: "https://m.media-amazon.com/images/I/81UcJ68zOuL.jpg",
  }

  )
    console.log('Blog content:', content);
    
    // Here you can handle saving the blog content to your database or API.
// const NewCards = () => {
//         <h1>Helloworld</h1>
// }
//  NewCards()
};

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'align',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto',  }}>
      <h1 className='font-bold text-[2rem]'>Create a New Blog Post</h1>
      <Editor className='h-96' placeholder='WRITE A BLOG...........'
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        theme="snow"
      />
      <button
        onClick={handlePublish}
        style={{
          marginTop: '50px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Publish Blog
      </button>
    </div>
  );
};

export default BlogEditor;