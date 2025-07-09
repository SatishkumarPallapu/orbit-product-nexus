
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle, Star, Trophy, Globe } from 'lucide-react';

const certifications = [
 {
    id: 1,
    title: "Supply Chain Logistics",
    issuer: "Coursera / Rutgers University",
    date: "2020",
    validUntil: "Lifetime",
    credentialId: "8TGUP5W5Y5GE",
    description: "Completed an online course on Supply Chain Logistics covering global logistics, inventory management, and distribution networks.",
    skills: ["Supply Chain", "Logistics", "Inventory Management", "Distribution", "Operations"],
    verificationUrl: "https://www.coursera.org/verify/8TGUP5W5Y5GE",
    image: "",
    color: "from-yellow-500 to-red-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },
  {
    id: 2,
    title: "Introduction to Google SEO",
    issuer: "Coursera / UC Davis",
    date: "2020",
    validUntil: "Lifetime",
    credentialId: "KA86N797Z2FG",
    description: "Learned foundational SEO strategies, keyword research, and web optimization to improve search engine visibility.",
    skills: ["SEO", "Google Tools", "Keyword Research", "Search Rankings", "Digital Marketing"],
    verificationUrl: "https://www.coursera.org/verify/KA86N797Z2FG",
    image: "",
    color: "from-green-500 to-lime-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },
  {
    id: 3,
    title: "Enterprise Product Management Fundamentals",
    issuer: "Coursera / Microsoft",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "YQY5MXNJSAXM",
    description: "Covers core enterprise product management concepts including user needs, stakeholder management, and value delivery.",
    skills: ["Product Management", "Enterprise Products", "Stakeholder Alignment", "User Research", "Roadmapping"],
    verificationUrl: "https://www.coursera.org/verify/YQY5MXNJSAXM",
    image: "",
    color: "from-blue-500 to-indigo-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },
  {
    id: 4,
    title: "Product Roadmapping Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-RM-2025",
    description: "Certified in building strategic product roadmaps that align with business goals and user needs.",
    skills: ["Product Strategy", "Roadmapping", "Vision Alignment", "Stakeholder Management"],
    verificationUrl: "https://productschool.teachable.com/courses/2111849/certificate",
    image: "",
    color: "from-indigo-500 to-purple-600",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 5,
    title: "Product Launches Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-PL-2025",
    description: "Certified in managing end-to-end product launches, market readiness, and cross-functional execution.",
    skills: ["Go-To-Market", "Launch Strategy", "Coordination", "Execution", "Growth"],
    verificationUrl: "https://productschool.teachable.com/courses/2406983/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-orange-500 to-pink-600",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 6,
    title: "Product Experimentation Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-EX-2025",
    description: "Certified in experimentation frameworks like A/B testing to validate product decisions with data.",
    skills: ["A/B Testing", "Experiment Design", "Hypothesis Validation", "Data-Driven Decisions"],
    verificationUrl: "https://productschool.teachable.com/courses/2702393/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-red-500 to-yellow-500",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 7,
    title: "Product Discovery Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-DS-2025",
    description: "Certified in uncovering user needs through research, problem framing, and validation techniques.",
    skills: ["Product Discovery", "User Research", "Problem Framing", "Customer Interviews"],
    verificationUrl: "https://productschool.teachable.com/courses/2600192/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-teal-500 to-green-600",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 8,
    title: "Product Analytics Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-AN-2025",
    description: "Certified in using analytics tools to monitor product performance and guide strategic decisions.",
    skills: ["Analytics", "Data Analysis", "Metrics", "KPI Monitoring", "Product Decisions"],
    verificationUrl: "https://productschool.teachable.com/courses/1373833/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-gray-500 to-slate-700",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 9,
    title: "Product Prioritization Micro-Certification",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-PR-2025",
    description: "Certified in frameworks like RICE and MoSCoW for effective prioritization in product development.",
    skills: ["Prioritization", "RICE Framework", "MoSCoW Method", "Product Planning"],
    verificationUrl: "https://productschool.teachable.com/courses/2772460/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-cyan-500 to-sky-600",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },{
    id: 14,
    title: "Artificial Intelligence Micro-Certification (AIC)",
    issuer: "Product School",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "PS-PR-2025",
    description: "Certified by Product School, designed to help product managers and professionals understand how to apply AI in product development.",
    skills: ["Prioritization", "RICE Framework", "MoSCoW Method", "Product Planning"],
    verificationUrl: "https://productschool.teachable.com/courses/2493899/certificate",
    image: "https://productschool.com/assets/meta/favicon-192x192.png",
    color: "from-cyan-500 to-sky-600",
    status: "active",
    logoUrl: "https://static-media.hotmart.com/yPgnRT7zqhISM-0j5bEA5Fh332U=/705x0/https://uploads.teachablecdn.com/attachments/Fmia05OMQaq1KzlEYSvc_Micro-certification-hero.jpg"
  },
  {
    id: 10,
    title: "Automating Sales Tasks with Zapier",
    issuer: "Coursera", 
    date: "2025",
    validUntil: "LIfetime",
    credentialId: "KYTTUGO3KYQK",
    description: "Comprehensive certification covering product strategy, roadmapping, user research, and product lifecycle management.",
    skills: ["Gmail", "Operations Management", "Automation", "Productivity Software", "Business Process Automation", "Order Fulfillment", "Workflow Management", "Google Sheets", "Sales Support", "Google Docs"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/KYTTUGO3KYQK",
    image: "",
    color: "from-blue-500 to-indigo-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },
  {
    id: 11,
    title: "Create a Value Proposition Canvas in Miro",
    issuer: "Coursera / Coursera Project Network",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "ZVPRGKKZ3L48",
    description: "Completed a hands-on project focused on mapping customer segments and value propositions using Miro to align business and user needs.",
    skills: ["Value Proposition", "Customer Segments", "Business Alignment", "Miro"],
    verificationUrl: "https://coursera.org/verify/ZVPRGKKZ3L48",
    image: "",
    color: "from-pink-500 to-red-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },
  {
    id: 12,
    title: "Business Analysis & Process Management",
    issuer: "Coursera / Coursera Project Network",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "A2BM4XDR1B94",
    description: "Completed a practical course on business analysis, process modeling, and stakeholder engagement for optimizing organizational workflows.",
    skills: ["Business Analysis", "Process Management", "Workflow Optimization", "Stakeholder Engagement"],
    verificationUrl: "https://coursera.org/verify/A2BM4XDR1B94",
    image: "",
    color: "from-yellow-600 to-orange-600",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  },

  {
    id: 13,
    title: "Enterprise Product Management Fundamentals",
    issuer: "Coursera / Microsoft",
    date: "2025",
    validUntil: "Lifetime",
    credentialId: "YQY5MXNJSAXM",
    description: "Completed a course by Microsoft on managing enterprise-level products, focusing on stakeholder management, delivery strategy, and user value.",
    skills: ["Enterprise Product Management", "Stakeholder Management", "Delivery Strategy", "User Value"],
    verificationUrl: "https://coursera.org/verify/YQY5MXNJSAXM",
    image: "",
    color: "from-blue-700 to-indigo-700",
    status: "active",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1757548800&v=beta&t=_529iCK35SMO1ldYyQE5aToYqmxoszWVclbR4-UlP78"
  }
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'expiring'>('all');

  const filteredCertifications = certifications.filter(cert => {
    if (filter === 'all') return true;
    return cert.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'expiring': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Certifications</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Continuously expanding knowledge through industry-recognized certifications and professional development
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Certifications', icon: Trophy },
              { key: 'active', label: 'Active', icon: CheckCircle },
              { key: 'expiring', label: 'Expiring Soon', icon: Calendar }
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                onClick={() => setFilter(key as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === key
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span className="font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedCert(cert)}
              className="relative group cursor-pointer"
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
                    {cert.status === 'active' ? 'Active' : 'Expiring Soon'}
                  </span>
                </div>

                {/* Certificate Logo */}
                <motion.div
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mb-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg p-2"
                >
                  <img 
                    src={cert.logoUrl} 
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </motion.div>

                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-white/70 font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-center gap-2 text-white/60 mb-4">
                    <Calendar size={14} />
                    <span className="text-sm">{cert.date}</span>
                  </div>

                  <p className="text-white/60 text-sm mb-6 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/10 text-white/70 rounded-lg text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/50 rounded-lg text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <div className="flex items-center justify-center gap-2 text-white/70 group-hover:text-white transition-colors">
                    <span className="text-sm">View Details</span>
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Trophy className="mx-auto mb-4 text-yellow-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">{certifications.length}</div>
            <div className="text-white/70">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <CheckCircle className="mx-auto mb-4 text-green-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">
              {certifications.filter(c => c.status === 'active').length}
            </div>
            <div className="text-white/70">Active Certifications</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Star className="mx-auto mb-4 text-blue-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Skill Areas</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <Shield className="mx-auto mb-4 text-purple-400" size={32} />
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/70">Verified</div>
          </div>
        </motion.div>

        {/* Certification Detail Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl p-4">
                  <img 
                    src={selectedCert.logoUrl} 
                    alt={`${selectedCert.issuer} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-xl text-white/70 mb-4">{selectedCert.issuer}</p>
                
                <div className="flex items-center justify-center gap-6 text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Issued: {selectedCert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span>Valid Until: {selectedCert.validUntil}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-white/70 leading-relaxed">{selectedCert.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-2 bg-gradient-to-r ${selectedCert.color} bg-opacity-20 text-white rounded-lg`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Credential Details</h4>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/70 mb-2">
                      <span className="text-white font-medium">Credential ID:</span> {selectedCert.credentialId}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedCert.status)}`}>
                        {selectedCert.status === 'active' ? 'Active' : 'Expiring Soon'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedCert.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <motion.a
                      href={selectedCert.verificationUrl}
                      target='_blank'
                    >
                        <ExternalLink size={16} />
                        Verify Credential
                    </motion.a>
                  </motion.button> */}
                  <motion.a
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedCert.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
              >
                <ExternalLink size={16} />
                 Verify Credential
              </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
