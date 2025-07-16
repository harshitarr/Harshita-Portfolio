import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-20 lg:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-20 flex flex-col lg:flex-row items-start lg:items-center ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-3 lg:left-1/2 transform lg:-translate-x-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-white border-4 border-[#8245ec] rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full lg:w-[45%] p-6 lg:p-8 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "lg:ml-[55%] lg:mr-0 text-left"
                  : "lg:mr-[55%] lg:ml-0 text-left"
              }`}
            >
              {/* Card Content */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-14 bg-white rounded overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>
              <p className="text-gray-400 font-bold mb-2">
                Grade: {edu.grade}
              </p>
              <p className="text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
