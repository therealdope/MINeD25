import React from 'react';

const About = () => {
  return (
    <section id='about' className="pt-14 mx-[8%] mt-10 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600 underline">
        About Our Project
      </h2>
      
      <p className="text-lg text-gray-800">
        Our team is participating in the <span className="font-semibold text-purple-600">MINeD Hackathon</span> with an innovative project:  
        <span className="font-semibold text-blue-600"> Converting research papers into podcasts.</span>  
        The goal is to provide a <span className="font-semibold text-green-600">customizable audio experience</span> for users who prefer consuming research in a more engaging and efficient way.
      </p>
      
      <p className="text-lg text-gray-800 mt-6">
        We are building a system that:
      </p>
      
      <ul className="list-disc list-inside text-lg text-gray-800 mt-2 space-y-2">
        <li><span className="font-semibold text-purple-600">Extracts text</span> from research papers.</li>
        <li><span className="font-semibold text-blue-600">Summarizes</span> the content using an <span className="text-green-600 font-semibold">AI-powered agent</span>.</li>
        <li><span className="font-semibold text-pink-600">Converts</span> the summary into <span className="text-red-600 font-semibold">audio</span> for easy listening.</li>
      </ul>

      <p className="text-lg text-gray-800 mt-6">
        This enables users to listen to a 
        <span className="font-semibold text-blue-600"> concise and accessible</span> version of research papers while 
        <span className="font-semibold text-green-600"> customizing the output</span> based on their preferences.
      </p>

      <p className="text-lg text-gray-800 mt-6">
        By <span className="font-semibold text-purple-600">automating</span> summarization and audio conversion, we aim to make 
        <span className="font-semibold text-blue-600"> research more accessible</span> and 
        <span className="font-semibold text-green-600"> convenient</span> for users 
        <span className="font-semibold text-pink-600"> on the go</span>.
      </p>
    </section>
  );
};

export default About;
