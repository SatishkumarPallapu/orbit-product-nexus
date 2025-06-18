import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ChevronRight, TrendingUp } from 'lucide-react';

// const experiences = [
//   {
//     id: 1,
//     company: "Data Pro Software Technology Pvt Ltd",
//     location: "Bangalore, Karnataka, India",
//     totalDuration: "Feb 2022 - Present",
//     roles: [
//       {
//         title: "Product Manager",
//         duration: "May 2023 – Present",
//         type: "Full-time",
//         description: "As a Product Manager, I led multiple 0-to-1 and growth-stage product initiatives across campaign compliance, checkout optimization, and internal tooling—delivering impactful outcomes across adoption, efficiency, and revenue growth.",
//         achievements: [
//           "Spearheaded multiple 0→1 product builds, including a campaign compliance platform, checkout optimization system, and internal productivity tool—each launched within tight timelines and rapidly adopted across users.",
//           "Drove cross-functional collaboration with design, engineering, QA, and business teams to deliver scalable, high-impact features across B2B SaaS and internal enterprise tools",
//           `Improved user engagement and operational efficiency, achieving results such as:

//           30K+ DAUs and 95% campaign compliance on Capsure

//           13% conversion uplift and 21% drop in bounce rate on checkout flows`,
//           `Defined roadmaps, success metrics, and MVP scope for all three products; led execution from concept to launch with rapid iteration and data-driven decision-making`,
//           `Contributed to revenue and cost-saving goals, including a 6-figure ARR pipeline, 4x increase in coupon usage, and 250+ man-hours saved per agency per month.`
//         ],
//         technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
//       },
//       {
//         title: "Associate Product Manager",
//         duration: "Feb 2022 - Apr 2023",
//         type: "Full-time",
//         description: "Developed responsive user interfaces and collaborated with design teams to create engaging user experiences. Focused on modern frontend technologies and accessibility standards.",
//         achievements: [
//           "Conducted data-driven problem analysis, identifying a 2× lower reservation rate among new users and formulating actionable hypotheses to address conversion gaps.",
//           "Executed an A/B testing roadmap across content formats, UI layouts, and banner placements—resulting in an 8.5 percentage point increase in click-through rate.",
//           "Collaborated cross-functionally with engineering, marketing, and analytics to implement scalable, automated coupon systems with real-time visibility",
//           "Drove $13.5M in incremental revenue within 6 months by aligning product improvements with marketing and business objectives."
//         ],
//         technologies: ["React", "Vue.js", "Sass", "JavaScript", "Git", "Figma"]
//       },
//     ]
//   },
//   {
//     id: 2,
//     company: "CarTrade Tech Limited (CARWALE).",
//     location: "Hyderabad, India", 
//     totalDuration: "July 2021 – Dec 2021",
//     roles: [
//       {
//         title: "Account Manager",
//         duration: "July 2021 – Dec 2021",
//         type: "Full-time",
//         description: "Managed end-to-end dealership portfolios, focusing on client relationship growth, inventory optimization, and revenue enhancement across the used car segment.",
//         achievements: [
//           "Cultivated strong dealer relationships, resulting in a 25% increase in repeat business within six months",
//           "Delivered customized inventory solutions aligned with dealer needs, leading to a 15% boost in sales performance.",
//           "Acted as a strategic advisor to dealerships, improving operational efficiency and trust through consistent engagement and insights."
//         ],
//         technologies: ["React", "JavaScript", "Sass", "Bootstrap", "PHP", "MySQL"]
//       }
//     ]
//   }
// ];

const experiences = [
  {
    id: 1,
    company: "Data Pro Software Technology Pvt Ltd",
    location: "Bangalore, India",
    totalDuration: "Feb 2022 – Present",
    roles: [
      {
        title: "Product Manager",
        duration: "Aug 2022 – Present",
        type: "Full-time",
        description:
          "Led end-to-end product lifecycle for multiple SaaS and internal tools. Delivered high-impact 0→1 product launches, optimized conversion funnels, and introduced scalable systems across campaign governance and productivity.",
        achievements: [
          "Built Capsure platform from scratch; now used by 150+ agencies with 15K–30K daily users",
          "Achieved 95%+ campaign compliance (from 65%) and saved 250+ man-hours/month per agency",
          "Launched time tracking tool adopted by 500+ employees, improving task-effort accuracy by 70%",
          "Reduced payment abandonment by 16% through UX revamp, wallet integration, and A/B testing",
          "Boosted conversion rates by 13% through data-driven experiments and behavioral nudges"
        ],
        technologies: [
          "Amplitude",
          "Google Analytics",
          "JIRA",
          "Figma",
          "SQL",
          "Power BI",
          "Chrome Extensions",
          "Shopify"
        ]
      },
      {
        title: "Associate Product Manager",
        duration: "Feb 2022 – July 2022",
        type: "Full-time",
        description:
          "Owned feature experimentation and strategic repositioning initiatives focused on increasing user engagement and revenue uplift.",
        achievements: [
          "Redesigned coupon experience as homepage-discoverable product tiles",
          "Improved CTR by 8.5% and generated $13.5M in incremental revenue",
          "Executed A/B tests across content, UI, and targeting segments"
        ],
        technologies: [
          "Amplitude",
          "Figma",
          "Google Analytics",
          "SQL",
          "JIRA",
          "Confluence"
        ]
      }
    ]
  },
  {
    id: 2,
    company: "CarTrade Tech Limited (CARWALE.COM)",
    location: "Hyderabad, India",
    totalDuration: "Jul 2021 – Dec 2021",
    roles: [
      {
        title: "Account Manager – Dealer Solutions (Used Car)",
        duration: "Jul 2021 – Dec 2021",
        type: "Full-time",
        description:
          "Managed dealership portfolios and implemented tailored inventory solutions to improve performance and client satisfaction.",
        achievements: [
          "Increased repeat business by 25% through relationship building and proactive engagement",
          "Improved dealer sales by 15% through personalized stock strategy and CRM utilization"
        ],
        technologies: ["CRM Tools", "Excel", "Client Relationship Management"]
      }
    ]
  },
  {
    id: 3,
    company: "Daily Daily",
    location: "Hyderabad, India",
    totalDuration: "Nov 2019 – June 2020",
    roles: [
      {
        title: "Founder",
        duration: "Nov 2019 – June 2020",
        type: "Full-time",
        description:
          "Founded and operated a hyperlocal grocery delivery startup focused on speed, efficiency, and retention.",
        achievements: [
          "Achieved 40% repeat customer rate within first 6 months",
          "Reduced average delivery time by 20% through optimized logistics"
        ],
        technologies: ["Excel", "Local Supply Chain Tools"]
      }
    ]
  }
];


export const Experience = () => {
  return (
    <div className="min-h-screen pb-16 px-4">
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
        <div className="space-y-12">
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
                <div className="absolute left-6 top-20 w-0.5 h-96 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
              )}
              
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />
                <div className="ml-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {experience.company}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/70">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{experience.totalDuration}</span>
                    </div>
                    {experience.roles.length > 1 && (
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} />
                        <span>{experience.roles.length} Roles</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="ml-16 space-y-6">
                {experience.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{role.duration}</span>
                          </div>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {role.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {role.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-white/70">
                            <ChevronRight size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.technologies.map((tech, techIndex) => (
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
                ))}
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
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-white/70">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">2</div>
            <div className="text-white/70">Companies</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4</div>
            <div className="text-white/70">Different Roles</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};