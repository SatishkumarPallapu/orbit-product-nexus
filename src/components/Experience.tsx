import React from 'react';
import { motion } from 'framer-motion';
import { TimelineCard } from '../components/TimelineCard';
import { InteractiveTimeline } from './InteractiveTimeline';

const experiences = [
  {
    id: 1,
    company: "BOVEN TECHNOLOGIES",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHGOJGKZs7tJw/company-logo_200_200/company-logo_200_200/0/1634118849502/data_pro_software_technology_pvt_ltd_logo?e=1740614400&v=beta&t=8tOoE5Pc7GFYvpgMJCWG5zDCCXOKHEKu0WLKMcvGHOo",
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
    company: "MXC SOLUTIONS (CARWALE.COM)",
    logo: "https://th.bing.com/th/id/OIP.VSaTpdWa0PeMWF-CXnifUwHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
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
    <div className="min-h-screen pb-16 px-4 corporate-bg">
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
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my professional roles and the impact I've made across different organizations and technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <InteractiveTimeline
              key={experience.id}
              company={experience.company}
              logo={experience.logo}
              location={experience.location}
              totalDuration={experience.totalDuration}
              roles={experience.roles}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 corporate-card rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="text-center p-6 corporate-card rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3</div>
            <div className="text-gray-300">Companies</div>
          </div>
          <div className="text-center p-6 corporate-card rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4</div>
            <div className="text-gray-300">Different Roles</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
};
