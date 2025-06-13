import React from 'react';
import { Code, Database, Globe, Smartphone, Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js'], icon: Globe },
    { category: 'Backend', items: ['Python', 'Express', 'Node.js'], icon: Code },
    { category: 'Databases', items: ['SQL', 'MongoDB'], icon: Database },
    { category: 'Other Skills', items: ['OOPs', 'REST API', 'C++', 'Java', 'Problem Solving'], icon: Smartphone },
  ];

  const education = [
    {
      degree: 'Industry Ready Certification in Full-stack Development',
      institution: 'Nxtwave Disruptive Technologies',
      period: '09/2022 – Ongoing',
      icon: Award
    },
    {
      degree: 'B Tech (Bachelor of Technology) - Electronics & Communication Engineering (ECE)',
      institution: 'G.Pullaiah College Of Engineering And Technology, Kurnool',
      period: '2022 – 2026 | Kurnool',
      grade: '7.5 CGPA',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'The Adoni Arts And Science College, Adoni',
      period: '2020 – 2022 | Adoni',
      grade: '70.0%',
      icon: GraduationCap
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'SRI VIDYA EM HIGH SCHOOL, ADONI',
      period: '2019 – 2020 | ADONI',
      grade: '10.0 CGPA',
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/src/assets/Pass photo copy.jpg"
                    alt="Ashok Kumar Reddy Gajjehalli"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer currently pursuing my B.Tech in Electronics & Communication Engineering 
                while simultaneously completing an Industry Ready Certification in Full-stack Development from Nxtwave Disruptive Technologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in modern web technologies including React.js, Node.js, Python, and various databases, 
                I love creating innovative solutions that solve real-world problems. My journey in technology is driven by 
                curiosity and a constant desire to learn and grow.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Based in Kurnool, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical <span className="text-purple-600">Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 ml-3">{skill.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Education & <span className="text-purple-600">Certifications</span>
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-600 mb-2">{edu.period}</p>
                        {edu.grade && (
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;