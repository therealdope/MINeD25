import React from "react";
import Link from "next/link";

const HeroSection = ({ Main }) => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="scroll-mt-20 min-h-[660px] relative mt-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-16 sm:py-12 lg:py-32 px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://www.securities.io/wp-content/uploads/2024/03/DALL·E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.webp')",
          }}
        />
        <div className="relative text-center mt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Welcome to Deadline Disco!!
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Transform research papers and educational content into captivating summaries.
          </p>
          <Link href="/Main">
          <button
            onClick={Main}
            className="bg-gradient-to-r from-blue-400 to-purple-400 border-2 text-lg font-semibold mt-16 text-white py-3 px-8 rounded-md hover:from-pink-300 hover:to-purple-300 hover:text-black transition duration-300"
            >
              Get Started
            </button>

          </Link>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative overflow-hidden bg-center py-4" 
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/wavy-background-concept_23-2148497712.jpg?semt=ais_hybrid')",
        }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative overflow-hidden whitespace-nowrap text-white">
          <div className="animate-marquee flex space-x-10 text-xl font-semibold px-10">
            <span>🚀 AI-Powered Summaries</span>
            <span>🎙️ Podcast Generation</span>
            <span>📊 Presentation Creator</span>
            <span>🎥 Video Generator</span>
            <span>📄 Research Simplified</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
