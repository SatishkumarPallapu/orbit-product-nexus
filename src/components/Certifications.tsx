
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle, Star, Trophy } from 'lucide-react';

const certifications = [
 {
    id: 1,
    title: "Automating Sales Tasks with Zapier",
    issuer: "Coursera", 
    date: "2025",
    validUntil: "LIfetime",
    credentialId: "KYTTUGO3KYQK",
    description: "Comprehensive certification covering product strategy, roadmapping, user research, and product lifecycle management.",
    skills: ["Gmail", "Operations Management", "Automation", "Productivity Software", "Business Process Automation", "Order Fulfillment", "Workflow Management", "Google Sheets", "Sales Support", "Google Docs"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/KYTTUGO3KYQK",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/89/a0db8f3ea3417ca90d4f3a4ca1d73e/coursera-projectnetwork-purplesquare.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    color: "from-blue-500 to-indigo-600",
    status: "active",
    logoUrl: "https://images.credly.com/images/6c1b3b2e-2f1a-4f3d-9f1a-2b3c4d5e6f7g/product-management-institute.png"
  },
  {
    id: 2,
    title: "Google Analytics Certified",
    issuer: "Google",
    date: "2023", 
    validUntil: "2024",
    credentialId: "GA-IQ-789456123",
    description: "Advanced certification in Google Analytics, covering data analysis, conversion tracking, and performance measurement.",
    skills: ["Data Analysis", "Conversion Tracking", "Performance Metrics", "Attribution Modeling"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-orange-500 to-red-600",
    status: "active",
    logoUrl: "https://developers.google.com/static/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png"
  },
  {
    id: 3,
    title: "Scrum Product Owner",
    issuer: "Scrum Alliance",
    date: "2022",
    validUntil: "2025",
    credentialId: "CSPO-2022-98765",
    description: "Certified Scrum Product Owner with expertise in agile methodologies, backlog management, and stakeholder collaboration.",
    skills: ["Scrum", "Agile", "Backlog Management", "Sprint Planning", "Stakeholder Management"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-green-500 to-teal-600",
    status: "active",
    logoUrl: "https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Global%20Nav/scrumalliance_logo.png"
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    validUntil: "2025",
    credentialId: "AWS-SAA-C02-567890",
    description: "Solutions architect certification with focus on cloud infrastructure, scalability, and system design principles.",
    skills: ["Cloud Architecture", "System Design", "Infrastructure", "Scalability", "Security"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-600",
    status: "active",
    logoUrl: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.8c88ac215fe4e441dc42865dd6962ed4f444a90d.png"
  },
  {
    id: 5,
    title: "Design Thinking Certification",
    issuer: "IDEO U",
    date: "2021",
    validUntil: "Lifetime",
    credentialId: "DT-2021-34567",
    description: "Human-centered design methodology certification focusing on innovation, empathy, and creative problem-solving.",
    skills: ["Design Thinking", "User Empathy", "Ideation", "Prototyping", "Innovation"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-600",
    status: "active",
    logoUrl: "https://www.ideou.com/hubfs/IDEO_U_Lockup_Black.png"
  },
  {
    id: 6,
    title: "Data Science Fundamentals",
    issuer: "IBM",
    date: "2021",
    validUntil: "2024",
    credentialId: "IBM-DS-2021-78901",
    description: "Foundation certification in data science, machine learning, and statistical analysis for product insights.",
    skills: ["Data Science", "Machine Learning", "Statistical Analysis", "Python", "SQL"],
    verificationUrl: "#",
    image: "/placeholder.svg",
    color: "from-indigo-500 to-purple-600",
    status: "expiring",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/05/IBM-logo.png"
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
      className="min-h-screen flex items-center justify-center px-4 py-20"
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedCert.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    Verify Credential
                  </motion.button>
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
