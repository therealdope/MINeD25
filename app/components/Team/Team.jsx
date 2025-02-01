import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Corrected here

const Team = () => {
  const teamMembers = [
    { role: "Team Leader", name: "Shwet Kheni", github: "https://github.com/shwetkheni", linkedin: "https://linkedin.com/in/shwetkheni" },
    { role: "Team Member", name: "Kenil Patel", github: "#", linkedin: "#" },
    { role: "Team Member", name: "Aditya Prajapati", github: "#", linkedin: "#" },
    { role: "Team Member", name: "Kalpesh Vala", github: "#", linkedin: "#" },
    { role: "Team Member", name: "Pranav Solanki", github: "#", linkedin: "#" },
  ];

  return (
    <div id='team' className='mx-[8%] pt-10 mt-10 scroll-mt-20'>
      <h2 className="text-3xl font-bold text-center mb-10 text-green-600 underline">Our Team</h2>
      
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="border border-gray-300 p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-shadow duration-300"
          >
            <h1 className="text-xs font-bold text-green-600 uppercase tracking-wide">
              {member.role}
            </h1>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mt-1">3rd Year, CSE</p>
            
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-600">Nirma University</p>
              <div className="flex space-x-4">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl">
                  <FaGithub />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id='contact' className="py-8 mt-8">
        <div className="text-2xl underline font-bold text-center text-red-600">
          Feel Free To Contact Us
        </div>
        <div className="w-full text-center text-lg flex justify-center items-center gap-3 mt-4">
          <FaEnvelope className="text-gray-800 text-2xl" />
          <span className="text-gray-800 font-medium">22BCE337@nirmauni.ac.in</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
