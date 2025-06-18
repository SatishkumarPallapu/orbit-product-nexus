
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present",
    type: "Full-time",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance optimization.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on multiple projects",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Innovations Ltd.",
    location: "New York, NY",
    duration: "Mar 2020 - Dec 2021",
    type: "Full-time",
    description: "Developed responsive user interfaces and collaborated with design teams to create engaging user experiences. Focused on modern frontend technologies and accessibility standards.",
    achievements: [
      "Built 15+ responsive web applications",
      "Reduced page load times by 35%",
      "Implemented accessibility standards achieving WCAG 2.1 compliance"
    ],
    technologies: ["React", "Vue.js", "Sass", "JavaScript", "Git", "Figma"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Hub",
    location: "Austin, TX",
    duration: "Jun 2018 - Feb 2020",
    type: "Full-time",
    description: "Started career journey working on various web development projects. Gained experience in both frontend and backend technologies while contributing to startup growth.",
    achievements: [
      "Contributed to 10+ successful project launches",
      "Learned and adapted to new technologies quickly",
      "Collaborated with cross-functional teams"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
  }
];

export const Experience = () => {
  return (
    <div className="min-h-screen py-20 px-4">
<!-- >>>>>>> main -->
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            A journey through my professional roles and the impact I've made across different organizations and technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />
              
              {/* Experience Card */}
              <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {experience.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-white/70">
                        <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3</div>
            <div className="text-white/70">Companies</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-white/70">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </div>
  );

