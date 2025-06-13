import React from 'react';
import { ExternalLink, Github, ShoppingCart, Briefcase, Calculator } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'NXT Trendz - E-commerce Platform',
      description: 'A cutting-edge e-commerce platform inspired by Amazon and Flipkart. Built with React Router, React components, form inputs, and event handlers. Features secure authentication with JWT tokens and REST API calls.',
      image: '/src/assets/Screenshot (588) copy.png',
      technologies: ['React.js', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
      githubUrl: 'https://github.com/ashokccbp/NXTTRENDZ-APP.git',
      liveUrl: 'https://ashokkecommerce.ccbp.tech/',
      icon: ShoppingCart,
      features: [
        'Built pages for Login, Products, and Product details with React Router',
        'React components, form inputs, and event handlers',
        'Secure authentication with JWT tokens and REST API calls'
      ]
    },
    {
      id: 2,
      title: 'Jobby App - Job Search Platform',
      description: 'An all-in-one job searching platform with built pages for Login, Home, Jobs, and Job Item details. Features secure authentication with JWT tokens and REST API calls with persisted login state.',
      image: '/src/assets/Screenshot (589) copy.png',
      technologies: ['React.js', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
      githubUrl: 'https://github.com/ashokccbp/jobby-app.git',
      liveUrl: 'https://ashokkjobbyapp.ccbp.tech/',
      icon: Briefcase,
      features: [
        'Constructed an all-in-one job searching platform',
        'Built pages for Login, Home, Jobs, and Job Item details',
        'Ensured secure authentication with JWT tokens and REST API calls',
        'Persisted login state with local storage and protected routes'
      ]
    },
    {
      id: 3,
      title: 'Project Cost Tracker - Expense Management Tool',
      description: 'A full-stack project cost tracking application to manage and visualize project expenses in real time. Built with React.js, Firebase for user authentication and Firestore for database management.',
      image: '/src/assets/Screenshot (590) copy.png',
      technologies: ['React.js', 'Firebase (Auth + Firestore)', 'Redux Toolkit', 'Chakra UI', 'React Router'],
      githubUrl: 'https://github.com/ashokccbp/Project-Cost-Tracker.git',
      liveUrl: 'https://project-cost-tracker-one.vercel.app/',
      icon: Calculator,
      features: [
        'Developed a full-stack project cost tracking application',
        'Built pages for adding, listing, and summarizing project items',
        'Integrated Firebase for user authentication and Firestore for database',
        'Real-time cost calculations and secure cloud storage'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-purple-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              modern web technologies, and problem-solving abilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <a
              href="https://github.com/ashokccbp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;