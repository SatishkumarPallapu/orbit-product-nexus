import React from 'react';
import { motion } from 'framer-motion';
import { TimelineCard } from '../components/TimelineCard';
import { InteractiveTimeline } from './InteractiveTimeline';


const experiences = [
  {
    id: 1,
    company: "WORTHSTYLE",
    logo: "/ws.webp",
    location: "Hyderabad, India",
    totalDuration: "2023 – Present",
    roles: [
      {
        title: "Product Manager – B2B Athleisure",
        duration: "2024 – Present",
        type: "Full-time",
        description:
          "Built and scaled a bootstrapped B2B athleisure vertical, owning client acquisition, international sourcing, product development, manufacturing operations, quality control, and order fulfillment.",
        achievements: [
          "Built and scaled the B2B athleisure vertical to 35 active clients (12 international, 23 domestic), generating ₹1.5 Cr in annual order value, with ~₹4.29 L average annual value per client and ~₹1.95 L average order value",
          "Achieved an estimated ~55% client rebill rate through standardized sampling approvals and QC checkpoints, exceeding the >20% industry reorder benchmark",
          "Established a 9-region sourcing network across 5 countries (UK, Australia, USA, Bangladesh, Sri Lanka) and 4 Indian states (Tamil Nadu, Karnataka, Maharashtra, Delhi-NCR), managing 6 manufacturing partners",
          "Partnered with a Dubai-based designer to develop 42 SKUs across 4 product lines, translating concepts into production-ready technical packs",
          "Achieved 10–14 day sampling and 35–50 day bulk turnaround with MOQs of 100–500 pieces per style/colour, maintaining ~92% on-time delivery",
          "Improved lead-to-order conversion from ~12% to ~18% by introducing standardized tech-pack templates and structured sampling workflows",
          "Reduced defect rates from ~5% to <2% through pre-production approval gates and in-line quality control, against an industry average of 3–5%",
          "Reduced unsold inventory by ~20% by shifting from speculative production to confirmed-order-only and pre-order models",
          "Achieved an estimated CLV:CAC ratio of ~40:1, with client lifetime value of ~₹9.4 L against an acquisition cost of ~₹20K"
        ],
        technologies: [
          "B2B Product Management",
          "Product Development",
          "Sourcing & Vendor Management",
          "Supply Chain Management",
          "Tech Packs",
          "Quality Control",
          "Sampling Workflows",
          "Inventory Optimization",
          "Client Relationship Management"
        ]
      }
    ]
  },
  {
    id: 2,
    company: "MXC SOLUTIONS (CARWALE.COM)",
    logo: "/mxc_solutions.jpg",
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
        technologies: [
          "CRM Tools",
          "Excel",
          "Client Relationship Management"
        ]
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
        technologies: [
          "Excel",
          "Local Supply Chain Tools"
        ]
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
