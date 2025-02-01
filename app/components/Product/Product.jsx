import React from "react";

const ProductSection = () => {
    const products = [
      {
        image: "https://img.freepik.com/premium-photo/ai-robot-journalist-with-mic-headphones-podcast-interview-concept-ai-generative_984126-10124.jpg",
        title: "Podcast Generator",
        description: "Summarizes and converts research papers into podcasts",
        info: "..Enjoy..",
        link: "/Main"
      },
      {
        image: "https://market-resized.envatousercontent.com/previews/files/518427775/preview-PPT.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=934576a024556b60249ae229bd713ea73f71b1847354af19e2fb46b9e7fef036",
        title: "Presentation AI",
        description: "Generate Presentation from research paper",
        info: "Coming soon...",
        link: null
      },
      {
        image: "https://cdn.prod.website-files.com/5fd2ba969b6ce08fc68b0904/64c983a2e701df5ebb2ff718_brain-artificial-intelligence-ai-video-generator%201.webp",
        title: "Video Generator",
        description: "Generate fun and educational video from research paper",
        info: "Coming soon...",
        link: null
      },
      {
        image: "https://img.freepik.com/premium-photo/interface-man-face-graphical-abstract-high-tech-generative-ai_863013-7000.jpg",
        title: "Graphical Abstract",
        description: "Abstract research paper into one easy to understand page",
        info: "Coming soon...",
        link: null
      }
    ];

    return (
        <div id="product" className="pt-14 mx-[8%] mt-10 scroll-mt-20">
          <h1 className="text-3xl font-bold text-center mb-10 text-pink-600 underline">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index} 
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col"
              >
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-4 flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
                <div className="mt-auto pt-3">
                  {product.link ? (
                    <a 
                      href={product.link} 
                      className="text-blue-600 font-semibold flex items-center justify-center hover:underline"
                    >
                      Enjoy →
                    </a>
                  ) : (
                    <p className="text-gray-500 text-center font-semibold">Coming Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default ProductSection;
