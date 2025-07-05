import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock, FileText, Layers, Monitor } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'projects' | 'case-studies' | 'prototypes'>('projects');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Revolution',
      category: 'Mobile App',
      description: 'Redesigned checkout flow resulting in 40% increase in conversion rates',
      longDescription: [
        'Led a comprehensive redesign of the mobile checkout experience',
        'Implemented progressive disclosure, one-click payments, and smart form validation',
        'Conducted extensive A/B testing and user research to optimize every step of the funnel'
      ],
      metrics: {
        revenue: '+$2.5M ARR',
        conversion: '+40%',
        users: '500K+',
        timeline: '6 months'
      },
      color: 'from-blue-500 to-purple-600',
      technologies: ['React Native', 'GraphQL', 'Stripe', 'Analytics'],
      impact: 'Increased company revenue by $2.5M annually and improved user satisfaction scores by 35%'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics',
      category: 'SaaS Platform',
      description: 'Built ML-driven insights platform serving 10K+ businesses',
      longDescription: [
        'Spearheaded the development of an AI-powered analytics platform',
        'Provided automated insights and recommendations to business users',
        'Collaborated with data science teams to translate complex ML models into actionable business intelligence'
      ],
      metrics: {
        revenue: '+$5M ARR',
        conversion: '+60%',
        users: '10K+',
        timeline: '12 months'
      },
      color: 'from-purple-500 to-pink-600',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      impact: 'Enabled data-driven decision making for 10,000+ businesses and reduced analysis time by 80%'
    },
    {
      id: 3,
      title: 'Fintech Innovation',
      category: 'Financial App',
      description: 'Launched digital banking features with 95% user adoption',
      longDescription: [
        'Led the product strategy and execution for a suite of digital banking features',
        'Developed budgeting tools, savings goals, and investment tracking capabilities',
        'Worked closely with regulatory teams to ensure compliance while maintaining exceptional UX'
      ],
      metrics: {
        revenue: '+$8M ARR',
        conversion: '+95%',
        users: '1M+',
        timeline: '18 months'
      },
      color: 'from-orange-500 to-red-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: 'Achieved 95% feature adoption rate and positioned company as fintech innovation leader'
    },
    {
      id: 4,
      title: 'TImesheet Guru',
      category: ' Internal Employee Productivity & Time Tracking Tool',
      description: 'An internal time tracking and productivity tool - streamline timesheet logging, and performance reporting across departments',
      longDescription: [
        'Conceptualized, developed, and launched in just 60 days as a 0→1 internal web application',
        'Led a 5-member cross-functional team (PM, FE, BE, QA, and UI/UX)',
        'Replaced manual logging with a scalable, automated system',
        'Enabled session tracking, role-based access, compliance, and real-time dashboards for 500+ users',
        'Reduced payroll and timesheet discrepancies and improved reporting accuracy'
      ],
      metrics: {
        revenue: ' NA',
        conversion: '100%',
        users: '500+',
        timeline: 'August 2022 – September 2022 (60 days)'
      },
      color: 'from-yellow-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `The tool achieved company-wide adoption as the daily standard for time reporting, significantly improving operational transparency. It enabled proactive resource planning and more effective performance reviews by providing accurate, real-time visibility into task-level efforts. By replacing manual logging processes, it reduced friction and human error, leading to increased efficiency. Additionally, the success and feedback from this tool directly informed the development of further automation solutions for HR and operations teams`
    },
    {
      id: 5,
      title: 'Payment Page Abandonment Optimization',
      category: 'Conversion Optimization',
      description: ` Redesigned the payment experience to address high checkout abandonment by
 integrating high-trust wallets, streamlining UX, and leveraging behavioral nudges—
 targeting increased conversion and improved customer confidence`,
      longDescription: [
        ` Led quantitative funnel
 analysis and qualitative session tracking to identify abandonment triggers—slow
 loading, trust friction, and poor visibility of savings.`,
        `Integrated major wallets (e.g., KakaoPay, NaverPay) and
 reducing payment time by 35% and enabling one-tap mobile transactions.`,
        `Launched real-time, cart-aware coupon suggestions with auto
 apply—resulting in a 4x boost in coupon usage and significant uptick in AOV`,
        `Implemented exit-intent modals with personalized incentives
 (based on user behavior & cart size), decreasing bounce rate by 21%.`,
        ` Deployed high-impact visual elements (refund guarantees,
 secure SSL badges, local payment icons) alongside contextual FAQs to increase
 perceived safety`,
        `Checkout completion rate improved by 19% post one-tap wallet rollout`,
        ` A/B testing across 500K+ sessions validated a +13% uplift in overall conversion
 rate, with strong statistical significance.`

      ],
      metrics: {
        revenue: '+22%',
        conversion: '+13%',
        users: '500k+',
        timeline: '6 Months'
      },
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `The redesigned payment experience led to a 16% reduction in checkout abandonment, outperforming industry benchmarks. One-tap wallet integration improved the checkout completion rate by 19%, while behavioral enhancements such as predictive coupon suggestions and exit-intent modals significantly boosted user engagement and retention. These changes resulted in a 4x increase in coupon usage and a 22% revenue lift from returning users. Overall, A/B testing validated a 13% improvement in conversion rates across over half a million sessions, demonstrating the substantial business value of these UX and behavioral optimizations.`
    },
    {
      id: 6,
      title: 'Capsure – Real-Time Campaign Compliance Platform',
      category: 'Conversion Optimization',
      description: 'A real-time campaign compliance and governance tool for advertising agencies, integrated with major ad platforms to enforce best practices and reduce QA overhead.',
      longDescription: [
        'Spearheaded 0-1 development of Capsure, now used by 150+ ad agencies and integrated with 18+ ad platforms including Meta, Reddit, and Google Ads',
        'Scaled daily usage from 15K to 30K users, enabling deployment across 100-200 marketers per agency',
        'Built a modular Chrome extension and rule engine for naming, targeting, and creative compliance',
        'Launched Rule Template Marketplace MVP, reducing onboarding time by 38%',
        'Delivered a powerful admin dashboard with compliance scores, audit logs, and governance insights',
        'Contributed to a 6-figure ARR pipeline through premium enterprise features.',
        'Increased product stickiness (DAU/MAU = 0.62) with real-time alerts and embedded workflows.'
      ],
      metrics: {
        revenue: 'NA',
        conversion: '90%',
        users: '15-30k+',
        timeline: '26 Months'
      },
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `Capsure transformed ad operations by enabling real-time compliance monitoring across multiple platforms, leading to a 95%+ campaign compliance rate—up from 65%. The platform dramatically reduced QA cycle times and saved over 250 man-hours per agency every month. Deep integration into agency workflows drove high user stickiness with a DAU/MAU ratio of 0.62, and strong engagement resulted in an NPS score of 72+. The introduction of enterprise dashboard features contributed to a six-figure ARR pipeline, while the Rule Template Marketplace improved onboarding speed by 38%, making Capsure a key operational asset for 150+ advertising agencies.`
    },
    {
      id: 7,
      title: 'Checkout Experience Redesign',
      category: 'Conversion Optimization',
      description: 'A strategic redesign of the e-commerce payment flow to reduce checkout abandonment by integrating trusted payment methods, predictive incentives, and behavioral nudges.',
      longDescription: [
        'Addressed high checkout abandonment by revamping UI/UX, wallet integrations, and behavioral nudges.',
        'Integrated KakaoPay, NaverPay for one-tap mobile transactions, cutting payment time by 35%',
        'Implemented real-time coupon engine with auto-apply, resulting in 4x boost in coupon use and higher AOV.',
        'Deployed exit-intent modals with personalized offers, reducing bounce rate by 21%.',
        'Enhanced perceived trust with refund guarantees, SSL badges, and local payment icons',
        'Achieved a 16% drop in abandonment rate (57% → 41%) and 19% uplift in checkout completion',
        'Validated a +13% conversion uplift via A/B tests across 500K+ sessions.'
      ],
      metrics: {
        revenue: '+22%',
        conversion: '+13%',
        users: '500k+',
        timeline: 'November 2022 – April 2023'
      },
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `Boosted compliance from 65% to 95%, reduced QA cycles by 40%, and saved 250+ man-hours/month per agency..`
    },
    {
      id: 8,
      title: 'Promotional Coupons Optimization',
      category: 'Internal Tool',
      description: 'A strategic redesign of the e-commerce payment flow to reduce checkout abandonment by integrating trusted payment methods, predictive incentives, and behavioral nudges.',
      longDescription: [
        'Reframed coupons as discoverable homepage products, driving same-day reservations',
        'Conducted deep user behavior analysis, revealing 2x lower conversion among new users.',
        'Increased banner click-through rate by 8.5pp through A/B testing of content, layout, and CTA.',
        ''
      ],
      metrics: {
        revenue: '+22%',
        conversion: '+13%',
        users: '500k+',
        timeline: 'November 2022 – April 2023'
      },
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `Boosted compliance from 65% to 95%, reduced QA cycles by 40%, and saved 250+ man-hours/month per agency..`
    }
  ];

// const projects = [
//   {
//     "id": 1,
//     "title": "Capsure – Ad Campaign Governance Platform",
//     "category": "SaaS Web App",
//     "description": "Built and scaled a 0→1 campaign compliance platform integrated with 18+ ad platforms",
//     "longDescription": [
//       "Developed modular rule engine, browser extension, and admin dashboard",
//       "Integrated with Meta, Google Ads, Reddit for real-time compliance",
//       "Launched Rule Template Marketplace MVP, reducing onboarding time by 38%",
//       "Achieved 95%+ compliance rate and improved QA efficiency"
//     ],
//     "metrics": {
//       "revenue": "NA",
//       "conversion": "95%",
//       "users": "15K–30K",
//       "timeline": "May 2023 – June 2025"
//     },
//     "color": "from-indigo-500 to-fuchsia-600",
//     "roles": ['PM', '4 FE Engineers', '3 BE Engineers', '2 QA', '2 Designers', '2 Data Analysts',' 2 Marketing Ops', '3 Support'],
//     "impact": "Saved 250+ man-hours/month per agency and maintained >90% retention with NPS of 72"
//   },
//   {
//     "id": 2,
//     "title": "Payment Experience Redesign",
//     "category": "E-Commerce Optimization",
//     "description": "Redesigned payment UX to cut abandonment and improve checkout conversion",
//     "longDescription": [
//       "Integrated KakaoPay, NaverPay wallets for one-tap payments",
//       "Built real-time coupon engine with auto-apply logic",
//       "Launched exit-intent triggers and trust badges",
//       "Conducted A/B testing across 500K+ sessions"
//     ],
//     "metrics": {
//       "revenue": "+22%",
//       "conversion": "+13%",
//       "users": "500K+ sessions tested",
//       "timeline": "Nov 2022 – Apr 2023"
//     },
//     "color": "from-green-500 to-emerald-600",

//     "roles": ['PM', '2 Engineers', 'Designers', 'Analyst', 'CRM Specilist'],
//     "impact": "Reduced abandonment from 57% to 41% and increased checkout rate by 19%"
//   },
//   {
//     "id": 3,
//     "title": "TimesheetGuru – Internal Productivity Tool",
//     "category": "Internal Web App",
//     "description": "Launched a time tracking and task effort tool adopted by 500+ employees",
//     "longDescription": [
//       "Designed schema, session logging, and reporting for time tracking",
//       "Drove rollout across HR, Ops, and Tech with stakeholder interviews",
//       "Automated validations and built CSV/PDF exports",
//       "Established a post-launch feedback loop and training"
//     ],
//     "metrics": {
//       "revenue": "N/A",
//       "conversion": "+70%",
//       "users": "500+",
//       "timeline": "Aug 2022 – Sep 2022"
//     },
//     "color": "from-yellow-500 to-orange-600",

//     "roles": ['PM', 'FE Dev', 'BE Dev', 'QA', ' Designers', '2 Data Analysts',' 2 Marketing Ops', '3 Support'],
//     "impact": "Reduced payroll discrepancies by 60% and boosted resource planning visibility by 50%"
//   },
//   {
//     "id": 4,
//     "title": "Promotional Coupon Repositioning",
//     "category": "Growth & Marketing",
//     "description": "Reframed promotional coupons as product tiles to drive bookings and engagement",
//     "longDescription": [
//       "A/B tested banner formats, layouts, and CTA placements",
//       "Productized coupons to improve homepage discoverability",
//       "Analyzed metrics like bounce rate, session time, and CTR",
//       "Collaborated with design, marketing, and data teams"
//     ],
//     "metrics": {
//       "revenue": "$13.5M",
//       "conversion": "+5%",
//       "users": "N/A",
//       "timeline": "Feb 2022 – July 2022"
//     },
//     "color": "from-pink-500 to-rose-600",
//     "roles": ['PM', 'FE Dev', 'BE Dev', 'QA', ' Designers', '2 Data Analysts',' 2 Marketing Ops', '3 Support'],
//     "impact": "Improved CTR by 8.5%, reduced bounce rate by 12%, and increased repeat bookings by 11.8%"
//   }
// ];

const caseStudies = [
  {
    id: 101,
    title: "Mobile-First E-commerce Redesign",
    category: "UX Research & Strategy",
    description: "Comprehensive user research and design strategy for mobile commerce optimization",
    longDescription: [
      "Conducted in-depth user interviews with 50+ mobile shoppers",
      "Analyzed user journey mapping and identified key friction points",
      "Developed personas and user scenarios based on behavioral data",
      "Created wireframes and high-fidelity prototypes for testing"
    ],
    metrics: {
      revenue: "Research Phase",
      conversion: "35% improvement",
      users: "2M+ mobile users",
      timeline: "3 months research"
    },
    color: "from-blue-500 to-cyan-600",
    roles: ['UX Researcher', 'Product Designer', 'Data Analyst', 'User Researcher'],
    impact: "Identified key mobile UX patterns that informed a 35% conversion improvement"
  },
  {
    id: 102,
    title: "SaaS Onboarding Flow Analysis",
    category: "Product Analytics",
    description: "Deep-dive analysis of user onboarding to reduce time-to-value",
    longDescription: [
      "Mapped complete user onboarding journey from signup to first value",
      "Identified drop-off points using cohort analysis and funnel metrics",
      "Conducted exit interviews with churned users in first 30 days",
      "Developed progressive disclosure strategy for complex features"
    ],
    metrics: {
      revenue: "Analysis Phase",
      conversion: "60% completion rate",
      users: "10K+ new signups",
      timeline: "6 weeks analysis"
    },
    color: "from-purple-500 to-indigo-600",
    roles: ['Product Analyst', 'UX Designer', 'Customer Success', 'Engineering'],
    impact: "Reduced time-to-first-value from 14 days to 3 days through strategic onboarding redesign"
  }
];

const prototypes = [
  {
    id: 201,
    title: "AI-Powered Content Recommendations",
    category: "Interactive Prototype",
    description: "Machine learning-driven content discovery interface prototype",
    longDescription: [
      "Built interactive Figma prototype with micro-interactions",
      "Designed ML-powered recommendation algorithm interface",
      "Created adaptive UI that learns from user preferences",
      "Integrated voice search and visual recognition features"
    ],
    metrics: {
      revenue: "Prototype Phase",
      conversion: "85% user approval",
      users: "Internal testing",
      timeline: "4 week sprint"
    },
    color: "from-emerald-500 to-teal-600",
    roles: ['Product Designer', 'UX Engineer', 'ML Engineer', 'Frontend Developer'],
    impact: "Prototype validated concept leading to $2M investment in AI recommendation engine"
  },
  {
    id: 202,
    title: "Real-time Collaboration Dashboard",
    category: "Web App Prototype",
    description: "Live collaborative workspace with real-time editing and communication",
    longDescription: [
      "Developed working prototype using React and WebSocket technology",
      "Implemented real-time cursor tracking and live document editing",
      "Created integrated video chat and screen sharing capabilities",
      "Built notification system for collaborative project management"
    ],
    metrics: {
      revenue: "MVP Phase",
      conversion: "90% task completion",
      users: "25 beta testers",
      timeline: "8 week development"
    },
    color: "from-orange-500 to-red-600",
    roles: ['Full-stack Developer', 'UX Designer', 'DevOps Engineer', 'QA Tester'],
    impact: "Prototype led to acquisition offer and integration into existing collaboration platform"
  },
  {
    id: 203,
    title: "Voice-First Shopping Assistant",
    category: "Voice Interface Prototype",
    description: "Conversational AI shopping assistant with natural language processing",
    longDescription: [
      "Designed voice interaction flows for hands-free shopping experience",
      "Integrated speech recognition and natural language understanding",
      "Created multi-modal interface combining voice, visual, and haptic feedback",
      "Tested accessibility features for visually impaired users"
    ],
    metrics: {
      revenue: "Concept Phase",
      conversion: "78% task success",
      users: "15 accessibility testers",
      timeline: "6 week prototype"
    },
    color: "from-violet-500 to-purple-600",
    roles: ['Voice UX Designer', 'AI Engineer', 'Accessibility Expert', 'Audio Engineer'],
    impact: "Prototype demonstrated 40% faster shopping completion for voice-preferred users"
  }
];

const getCurrentData = () => {
  switch (activeSection) {
    case 'case-studies':
      return caseStudies;
    case 'prototypes':
      return prototypes;
    default:
      return projects;
  }
};

const getSectionTitle = () => {
  switch (activeSection) {
    case 'case-studies':
      return 'Case Studies';
    case 'prototypes':
      return 'Prototypes';
    default:
      return 'Featured Projects';
  }
};

const getSectionDescription = () => {
  switch (activeSection) {
    case 'case-studies':
      return 'In-depth research and strategic analysis driving product decisions';
    case 'prototypes':
      return 'Experimental concepts and proof-of-concept implementations';
    default:
      return 'Transforming ideas into market-leading products';
  }
};

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start justify-center px-4 "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {getSectionTitle()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {getSectionDescription()}
          </p>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'projects', label: 'Projects', icon: Monitor },
              { key: 'case-studies', label: 'Case Studies', icon: FileText },
              { key: 'prototypes', label: 'Prototypes', icon: Layers }
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(key as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md text-white/70 border border-white/20 hover:border-white/40'
                }`}
              >
                <Icon size={20} />
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getCurrentData().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  rotateY: 10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(item.id)}
                className="relative cursor-pointer group"
                style={{ transform: 'perspective(1000px)' }}
              >
                <div className={`relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden h-full`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Floating Number */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotateZ: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {String(item.id).padStart(2, '0')}
                  </motion.div>

                  <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                      <div className="text-orange-400 text-sm font-medium uppercase tracking-wide">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.metrics.conversion}
                        </div>
                        <div className="text-white/60 text-xs">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.metrics.users}
                        </div>
                        <div className="text-white/60 text-xs">Users</div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl flex items-center justify-center"
                    >
                      <ExternalLink className="text-white/80" size={32} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                style={{ transform: 'perspective(1000px)' }}
              >
                {(() => {
                  const allItems = [...projects, ...caseStudies, ...prototypes];
                  const item = allItems.find(p => p.id === selectedProject);
                  if (!item) return null;

                  return (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-4">
                        <h3 className="text-4xl font-bold text-white">{item.title}</h3>
                        <div className="text-left max-w-none">
                          <ul className="text-xl text-white/70 space-y-2">
                            {item.longDescription.map((point, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-blue-400 mt-2 flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          { icon: DollarSign, label: 'Revenue Impact', value: item.metrics.revenue },
                          { icon: TrendingUp, label: 'Conversion Lift', value: item.metrics.conversion },
                          { icon: Users, label: 'Users Reached', value: item.metrics.users },
                          { icon: Clock, label: 'Timeline', value: item.metrics.timeline }
                        ].map((metric, index) => {
                          const Icon = metric.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                            >
                              <Icon className={`mx-auto mb-2 text-2xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} size={32} />
                              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                              <div className="text-white/60 text-sm">{metric.label}</div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Technologies/Roles */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Teams Collaborated</h4>
                        <div className="flex flex-wrap gap-3">
                          {item.roles.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className={`px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white font-medium`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Business Impact</h4>
                        <p className="text-white/80 text-lg leading-relaxed">{item.impact}</p>
                      </div>

                      {/* Close Button */}
                      <div className="text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(null)}
                          className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:border-white/40 transition-colors"
                        >
                          Close
                        </motion.button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
