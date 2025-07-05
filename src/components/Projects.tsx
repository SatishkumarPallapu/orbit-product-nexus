
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock, FileText, Layers, Monitor, Bot } from 'lucide-react';
import { CaseStudyCard } from './CaseStudyCard';
import { CaseStudyViewer } from './CaseStudyViewer';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'projects' | 'case-studies' | 'prototypes' | 'ai-agents'>('projects');

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
      roles: ['React Native', 'GraphQL', 'Stripe', 'Analytics'],
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
      roles: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
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
      roles: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
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
      roles: ['PM', 'FE Dev', 'BE Dev', 'QA', 'UI/UX Designer'],
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
      roles: ['PM', '2 Engineers', 'Designers', 'Analyst', 'CRM Specialist'],
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
      roles: ['PM', '4 FE Engineers', '3 BE Engineers', '2 QA', '2 Designers', '2 Data Analysts', '2 Marketing Ops', '3 Support'],
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
      roles: ['PM', '2 Engineers', 'Designers', 'Analyst', 'CRM Specialist'],
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
      roles: ['PM', 'FE Dev', 'BE Dev', 'QA', 'Designers', '2 Data Analysts', '2 Marketing Ops', '3 Support'],
      impact: `Boosted compliance from 65% to 95%, reduced QA cycles by 40%, and saved 250+ man-hours/month per agency..`
    }
  ];

  const caseStudies = [
    {
      id: 101,
      title: "Mobile-First E-commerce Redesign",
      category: "UX Research & Strategy",
      description: "Comprehensive user research and design strategy for mobile commerce optimization",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
      documentPdf: "/case-studies/mobile-ecommerce-redesign.pdf",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
      ],
      duration: "3 months",
      teamSize: "5 members",
      objective: "Reduce mobile checkout abandonment by 50% through comprehensive UX research and strategic design improvements",
      outcome: "Achieved 35% improvement in conversion rates and reduced time-to-purchase by 40%",
      longDescription: [
        "Conducted in-depth user interviews with 50+ mobile shoppers across different demographics",
        "Analyzed user journey mapping and identified key friction points in the checkout process",
        "Developed detailed personas and user scenarios based on behavioral data and shopping patterns",
        "Created wireframes and high-fidelity prototypes for extensive user testing and validation"
      ],
      methodology: [
        "User Interviews & Surveys",
        "Journey Mapping & Pain Point Analysis",
        "Competitive Benchmarking",
        "A/B Testing Framework",
        "Heuristic Evaluation",
        "Accessibility Audit"
      ],
      keyFindings: [
        "Mobile users abandon checkout 3x more often due to form complexity",
        "Guest checkout option increased completion by 25%",
        "Single-page checkout reduced abandonment by 18%",
        "Payment method visibility crucial for user confidence"
      ],
      tags: ['UX Research', 'Mobile Design', 'E-commerce', 'User Testing', 'Journey Mapping', 'Conversion Optimization'],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 102,
      title: "SaaS Onboarding Flow Analysis",
      category: "Product Analytics",
      description: "Deep-dive analysis of user onboarding to reduce time-to-value",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      documentPdf: "/case-studies/saas-onboarding-analysis.pdf",
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop"
      ],
      duration: "6 weeks",
      teamSize: "4 members",
      objective: "Analyze and optimize user onboarding flow to improve product adoption and reduce churn",
      outcome: "Reduced time-to-first-value from 14 days to 3 days, improved 30-day retention by 45%",
      longDescription: [
        "Mapped complete user onboarding journey from signup to first meaningful value achievement",
        "Identified critical drop-off points using cohort analysis and advanced funnel metrics",
        "Conducted comprehensive exit interviews with users who churned within first 30 days",
        "Developed progressive disclosure strategy for complex features to reduce cognitive load"
      ],
      methodology: [
        "Cohort Analysis",
        "Funnel Analytics",
        "Exit Interview Protocol",
        "Feature Usage Tracking",
        "Customer Success Collaboration",
        "Progressive Disclosure Design"
      ],
      keyFindings: [
        "Users needed to complete 3 key actions within first session for long-term retention",
        "Feature discovery was the primary blocker to value realization",
        "Personalized onboarding paths increased completion by 60%",
        "In-app guidance reduced support tickets by 40%"
      ],
      tags: ['Product Analytics', 'User Onboarding', 'SaaS', 'Retention', 'Data Analysis', 'User Experience'],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 103,
      title: "Healthcare App Accessibility Study",
      category: "Accessibility Research",
      description: "Comprehensive accessibility audit and improvement recommendations for healthcare mobile application",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
      documentPdf: "/case-studies/healthcare-accessibility-study.pdf",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
      ],
      duration: "4 months",
      teamSize: "6 members",
      objective: "Ensure WCAG 2.1 AA compliance and improve usability for users with disabilities",
      outcome: "Achieved 98% WCAG compliance and improved accessibility score from 65% to 94%",
      longDescription: [
        "Conducted comprehensive accessibility audit using automated and manual testing methods",
        "Engaged with users with various disabilities for user testing and feedback sessions",
        "Developed accessibility guidelines and design system components",
        "Implemented assistive technology compatibility improvements"
      ],
      methodology: [
        "WCAG 2.1 Compliance Audit",
        "Screen Reader Testing",
        "Keyboard Navigation Assessment",
        "Color Contrast Analysis",
        "User Testing with Disabilities",
        "Assistive Technology Integration"
      ],
      keyFindings: [
        "Critical health information was inaccessible to screen reader users",
        "Color-only indicators failed for colorblind users",
        "Touch targets were too small for users with motor impairments",
        "Complex navigation structure hindered cognitive accessibility"
      ],
      tags: ['Accessibility', 'Healthcare', 'WCAG Compliance', 'Inclusive Design', 'User Testing', 'Mobile Apps'],
      color: "from-green-500 to-teal-600"
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

  const aiAgents = [
    {
      id: 301,
      title: "Customer Support AI Agent",
      category: "Conversational AI",
      description: "Intelligent customer support agent handling 85% of inquiries autonomously",
      longDescription: [
        "Developed sophisticated NLP-powered customer support agent using GPT-4 and custom training data",
        "Integrated with existing CRM and knowledge base for contextual responses",
        "Implemented escalation logic for complex queries requiring human intervention",
        "Built real-time sentiment analysis to identify frustrated customers",
        "Created multi-language support for global customer base"
      ],
      metrics: {
        revenue: "30% cost reduction",
        conversion: "85% auto-resolution",
        users: "50K+ interactions/month",
        timeline: "4 months development"
      },
      color: "from-blue-500 to-cyan-600",
      roles: ['AI Engineer', 'NLP Specialist', 'Backend Developer', 'UX Designer'],
      impact: "Reduced support costs by 30% while improving customer satisfaction scores by 25% through 24/7 availability and consistent response quality"
    },
    {
      id: 302,
      title: "Sales Intelligence Agent",
      category: "Sales Automation",
      description: "AI-powered sales agent that qualifies leads and schedules meetings automatically",
      longDescription: [
        "Built intelligent sales agent using conversation AI and lead scoring algorithms",
        "Integrated with Salesforce CRM for seamless lead management and tracking",
        "Implemented dynamic conversation flows based on prospect behavior and responses",
        "Created automated follow-up sequences with personalized messaging",
        "Developed integration with calendar systems for automated meeting scheduling"
      ],
      metrics: {
        revenue: "+$2M pipeline",
        conversion: "60% lead qualification",
        users: "10K+ prospects engaged",
        timeline: "6 months development"
      },
      color: "from-green-500 to-emerald-600",
      roles: ['AI Product Manager', 'Conversation Designer', 'CRM Specialist', 'Sales Ops'],
      impact: "Generated $2M in qualified pipeline while reducing sales team workload by 40%, allowing focus on high-value prospects and closing deals"
    },
    {
      id: 303,
      title: "Content Generation Agent",
      category: "Creative AI",
      description: "Multi-modal AI agent for automated content creation across platforms",
      longDescription: [
        "Developed comprehensive content generation system using GPT-4, Claude, and image generation models",
        "Built brand voice consistency engine to maintain tone across all generated content",
        "Integrated with social media APIs for automated posting and scheduling",
        "Created content performance analysis and optimization recommendations",
        "Implemented multi-format content adaptation (blog posts, social media, emails, ads)"
      ],
      metrics: {
        revenue: "50% content cost reduction",
        conversion: "300% content output increase",
        users: "15 marketing teams",
        timeline: "8 months development"
      },
      color: "from-purple-500 to-pink-600",
      roles: ['AI Engineer', 'Content Strategist', 'Marketing Ops', 'Brand Manager'],
      impact: "Increased content production by 300% while maintaining brand consistency, resulting in 40% improvement in engagement rates across all channels"
    },
    {
      id: 304,
      title: "Code Review Assistant Agent",
      category: "Developer Tools",
      description: "AI-powered code review agent integrated with GitHub for automated quality assurance",
      longDescription: [
        "Built intelligent code review system using specialized LLMs trained on best practices",
        "Integrated with GitHub Actions for automated pull request analysis",
        "Implemented security vulnerability detection and performance optimization suggestions",
        "Created custom rule engines for company-specific coding standards",
        "Developed learning system that improves suggestions based on team feedback"
      ],
      metrics: {
        revenue: "40% dev time savings",
        conversion: "95% bug detection accuracy",
        users: "100+ developers",
        timeline: "5 months development"
      },
      color: "from-orange-500 to-red-600",
      roles: ['DevOps Engineer', 'AI Specialist', 'Senior Developers', 'Security Expert'],
      impact: "Reduced code review time by 60% while improving code quality scores by 35%, catching 95% of potential issues before production deployment"
    }
  ];

  const getCurrentData = () => {
    switch (activeSection) {
      case 'case-studies':
        return caseStudies;
      case 'prototypes':
        return prototypes;
      case 'ai-agents':
        return aiAgents;
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
      case 'ai-agents':
        return 'AI Agents';
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
      case 'ai-agents':
        return 'Intelligent agents automating complex workflows and decision-making';
      default:
        return 'Transforming ideas into market-leading products';
    }
  };

  const renderCaseStudies = () => (
    <motion.div
      key="case-studies"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard
          key={caseStudy.id}
          caseStudy={caseStudy}
          index={index}
          onClick={() => setSelectedProject(caseStudy.id)}
        />
      ))}
    </motion.div>
  );

  const renderOtherSections = () => (
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

              {/* Quick Metrics - only for items with metrics property */}
              {'metrics' in item && (
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
              )}

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
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start justify-center px-4"
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
              { key: 'prototypes', label: 'Prototypes', icon: Layers },
              { key: 'ai-agents', label: 'AI Agents', icon: Bot }
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
          {activeSection === 'case-studies' ? renderCaseStudies() : renderOtherSections()}
        </AnimatePresence>

        {/* Modals */}
        <AnimatePresence>
          {selectedProject && activeSection === 'case-studies' && (
            <CaseStudyViewer
              caseStudy={caseStudies.find(cs => cs.id === selectedProject)!}
              onClose={() => setSelectedProject(null)}
            />
          )}
          
          {selectedProject && activeSection !== 'case-studies' && (
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
                  const allItems = [...projects, ...caseStudies, ...prototypes, ...aiAgents];
                  const item = allItems.find(p => p.id === selectedProject);
                  if (!item) return null;

                  // Check if item has metrics property (projects, prototypes, ai-agents)
                  const hasMetrics = 'metrics' in item;
                  const hasRoles = 'roles' in item;
                  const hasImpact = 'impact' in item;

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

                      {/* Metrics Grid - only show if item has metrics */}
                      {hasMetrics && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {[
                            { icon: DollarSign, label: 'Revenue Impact', value: (item as any).metrics.revenue },
                            { icon: TrendingUp, label: 'Conversion Lift', value: (item as any).metrics.conversion },
                            { icon: Users, label: 'Users Reached', value: (item as any).metrics.users },
                            { icon: Clock, label: 'Timeline', value: (item as any).metrics.timeline }
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
                      )}

                      {/* Technologies/Roles - only show if item has roles */}
                      {hasRoles && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white">Teams Collaborated</h4>
                          <div className="flex flex-wrap gap-3">
                            {(item as any).roles.map((tech: string, index: number) => (
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
                      )}

                      {/* Impact - only show if item has impact */}
                      {hasImpact && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white">Business Impact</h4>
                          <p className="text-white/80 text-lg leading-relaxed">{(item as any).impact}</p>
                        </div>
                      )}

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
