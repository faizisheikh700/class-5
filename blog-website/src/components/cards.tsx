"use client"
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";


export const cardData = [
    {
      title: "Ai Book",
      id: "1",
      description: "The Rise of AI: Transforming Our World Artificial Intelligence (AI) is no longer just a concept from science fiction; it has become an integral part of our daily lives. From voice-activated assistants like Siri and Alexa to advanced algorithms that drive recommendations on platforms like Netflix and Amazon, AI is reshaping how we interact with technology. One of the most exciting aspects of AI is its ability to analyze vast amounts of data quickly and accurately. This capability is revolutionizing sectors such as healthcare, where AI helps in diagnosing diseases and developing personalized treatment plans. In business, AI-driven analytics are enhancing decision-making processes and improving customer experiences.However, with great power comes great responsibility. As AI continues to evolve, ethical considerations around privacy, bias, and job displacement are becoming increasingly important. It’s crucial for developers and policymakers to work together to ensure that AI benefits all of society. The future of AI is both promising and complex, and as we navigate this new landscape, staying informed and engaged is more important than ever.",
      imgSrc: "https://m.media-amazon.com/images/I/81UcJ68zOuL.jpg",
    },
  {
    title: "Html & Css",
    id: "2",
    description: "The Dynamic Duo: HTML and CSS in Web Development When it comes to building websites, HTML and CSS are the foundational blocks that every developer needs to master. HTML, or HyperText Markup Language, serves as the skeleton of a webpage, structuring content such as headings, paragraphs, images, and links. It tells the browser what elements to display and how they are organized.On the other hand, CSS, or Cascading Style Sheets, is what brings that structure to life. It allows developers to apply styles, colors, fonts, and layouts, transforming a plain HTML document into a visually appealing website. Whether it’s adjusting margins or creating responsive designs for mobile devices, CSS plays a crucial role in ensuring a great user experience.Together, HTML and CSS create a seamless blend of functionality and aesthetics. As you dive into web development, understanding how these two technologies interact is essential. With limitless possibilities for creativity and design, mastering HTML and CSS can unlock a world of opportunity in the digital landscape. Happy coding!",
    imgSrc: "https://miro.medium.com/v2/resize:fit:1354/0*PsYVjTk-F17_ZJ1d",
  },
  {
    title: "What is Books",
    id:"3",
    description: "The Timeless Treasure: What Are Books? Books have been a cornerstone of human culture and knowledge for centuries. At their core, books are collections of written or printed pages, bound together and encased in a cover. They serve as vessels for stories, ideas, and information, transcending time and space. From ancient scrolls to modern e-books, the evolution of books reflects our changing relationship with knowledge.Reading books allows us to escape into different worlds, experience diverse perspectives, and gain insights into the human condition. Whether it's fiction that sparks our imagination or nonfiction that educates and informs, books have the power to inspire and transform lives. In an age dominated by screens, the tactile experience of holding a book, turning its pages, and even the smell of paper remains irreplaceable for many. Embracing the habit of reading can enrich your life, broaden your horizons, and cultivate empathy. So, pick up a book today and immerse yourself in its endless wonders!",
    imgSrc: "https://www.londonlibrary.co.uk/images/20210408113322.JPG",
  },
  {
    title: "Whole World",
    id: "4",
    description: "The Whole World: A Tapestry of Diversity The whole world is a vast, intricate tapestry woven from diverse cultures, histories, and landscapes. From the bustling streets of Tokyo to the serene beaches of the Maldives, each corner of the globe offers a unique story waiting to be discovered. This diversity enriches our human experience, reminding us that while we may come from different backgrounds, we share a common thread of existence.Nature, too, plays a crucial role in shaping our world. The majesty of mountains, the depth of oceans, and the expanse of forests create breathtaking landscapes that inspire awe. These natural wonders not only provide beauty but also vital resources for life.In a rapidly globalizing society, understanding and appreciating this diversity is more important than ever. By embracing the whole world—its people, its cultures, and its natural wonders—we foster connection and empathy. Let’s celebrate our shared humanity and the beauty that exists in our differences, for together, we make up a vibrant, interconnected world.",
    imgSrc: "https://www.fedpo.com/images/TheWholeWorldOver/01TheWholeWorldOver.jpg",
  },
  {
    title: "Eyes",
    id: "5",
    description: "The Window to the Soul: The Power of Eyes. Eyes have long been celebrated as the windows to the soul, offering a glimpse into our emotions and thoughts. They are not just organs of sight; they are powerful communicators. A single glance can convey joy, sadness, curiosity, or love. The intricate patterns and colors of irises tell their own unique stories, making each pair of eyes truly one-of-a-kind.Beyond their aesthetic appeal, eyes play a crucial role in our connection with the world. They help us navigate our surroundings, allowing us to appreciate the beauty of nature, art, and human interaction. Yet, in our fast-paced lives, we often overlook the importance of eye care. Regular check-ups and protective measures can preserve our vision and maintain eye health.As we engage with others, let’s remember the significance of our eyes. They can bridge gaps between cultures and foster understanding. So, the next time you lock eyes with someone, consider it a moment of connection—a silent conversation that speaks volumes. Embrace the beauty of your own eyes and the stories they hold.",
    imgSrc: "https://paramountbooks.com.pk/wp-content/uploads/2023/10/9789692109161.jpg",
  },
  {
    title: "Computer",
    id: "6",
    description: "The Modern Marvel: Embracing the Power of Computers In our fast-paced digital world, computers have become indispensable tools, transforming the way we live, work, and communicate. From the humble beginnings of room-sized machines to today's sleek laptops and powerful desktops, these devices have revolutionized various industries and everyday tasks. Computers enable us to connect globally, access vast information at lightning speed, and unleash our creativity through design, music, and writing. They facilitate remote work, online education, and social interactions, breaking geographical barriers and fostering collaboration.However, with great power comes responsibility. As we immerse ourselves in the digital realm, it's essential to prioritize cybersecurity and practice healthy screen habits. Balancing our online and offline lives can enhance our well-being and productivity.Ultimately, computers are not just machines; they are gateways to endless possibilities. By harnessing their potential wisely, we can unlock new opportunities and shape a better future.",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEJhOQhMy_cPTFi-dttHURDJCa9cGRiTPtw&s",
  },
];













export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<number| string | null>(null);
  interface Card {
    title: string;
    id: string;
    description: string;
    imgSrc: string;
  }
  
  
   const [comments, setComments] = useState('')
   const [displayValue, setDisplayValue] = useState('');

   const handleComments = () => {
    setDisplayValue(comments);
    setComments('')
    
  };

  return (
    <>
      <div className="cardsContainer">
        {selectedCard === null ? (
          cardData.map((card) => (
            <div key={card.id} className="blogCards">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={card.imgSrc}
                  style={{ width: "18rem", height: "15rem" }}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.title}
                  </h5>
                  <p className="card-text">{card.description.slice(0, 25)}</p>
                  <button
                    style={{ padding: "0.3rem" }}
                    onClick={() => setSelectedCard(card.id)}
                    >
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        background: "#512803",
                        borderRadius: "0.3rem",
                        color: "#D5BF86",
                        padding: "2px",
                      }}
                    >
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))
          
        ) : (
          <div className="blogCards">
            {cardData
              .filter((card) => card.id === selectedCard)
              .map((card) => (
                <div key={card.id} className="card" style={{ width: "45rem" }}>
                  <img
                    src={card.imgSrc}
                    style={{}}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title " style={{ fontWeight: "bold", fontSize: "4rem"}}>
                      {card.title}
                    </h5>
                    <p className="card-text" style={{ padding: "0.3rem" }}>{card.description}</p>
                    <button
                      style={{ padding: "0.3rem" }}
                      onClick={() => setSelectedCard(null)}
                    >
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{
                          background: "#512803",
                          borderRadius: "0.3rem",
                          color: "#D5BF86",
                          padding: "0.3rem",
                        }}
                      >
                        Back
                      </a>
                    </button>
                  </div>
                </div>
              ))}
              <div>

              <h4> Comments</h4>
              <br />
              <p>{displayValue}</p> <br />
              <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="comment here" name="" id=""></textarea> <br />
              {/* <input  type="text" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="comment here" name="" id="" /> */}
              <button onClick={()=>handleComments()} >Submit</button>
              </div>
          </div>
        )}
      </div>
    </>
  );
}
