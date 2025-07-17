import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock, FileText, Layers, Monitor, Bot, Globe, Code2 } from 'lucide-react';
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
      color: 'from-pink-500 to-white-600',
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
      color: 'from-blue-500 to-red-600',
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
      color: 'from-green-500 to-blue-600',
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
      color: 'from-red-500 to-gold-600',
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
      color: 'from-purple-500 to-indigo-600',
      roles: ['PM', 'FE Dev', 'BE Dev', 'QA', 'Designers', '2 Data Analysts', '2 Marketing Ops', '3 Support'],
      impact: `Boosted compliance from 65% to 95%, reduced QA cycles by 40%, and saved 250+ man-hours/month per agency..`
    }
  ];

  const caseStudies = [
    {
      id: 101,
      title: "Factors AI - New Feature PRD",
      category: "Product Requirements Document",
      description: "Comprehensive product requirements document for new AI-powered features in Factors AI platform",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop", // AI/Tech logo
      documentPdf: "/FactorsAINewFeaturePRD-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
      ],
      duration: "4 weeks",
      teamSize: "Cross-functional team",
      objective: "Define and specify new AI-powered features to enhance user engagement and platform capabilities",
      outcome: "Successfully launched new features with measurable impact on user adoption and platform growth",
      longDescription: [
        "Conducted comprehensive market research and competitive analysis",
        "Defined detailed user stories and acceptance criteria for AI features",
        "Collaborated with engineering and design teams to ensure feasibility",
        "Created detailed wireframes and technical specifications"
      ],
      methodology: [
        "User Research & Interviews",
        "Competitive Analysis",
        "Technical Feasibility Assessment",
        "Stakeholder Alignment Sessions",
        "Agile Development Planning",
        "Success Metrics Definition"
      ],
      keyFindings: [
        "Users needed more personalized AI recommendations",
        "Integration with existing workflows was crucial for adoption",
        "Performance optimization was key for user satisfaction",
        "Clear onboarding reduced time-to-value significantly"
      ],
      tags: ['AI', 'Product Strategy', 'PRD', 'Feature Development', 'User Experience', 'Data Analytics'],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 102,
      title: "MakeMyTrip - Graduate Project",
      category: "Travel & Tourism",
      description: "Strategic product development project for MakeMyTrip focusing on user experience optimization",
      thumbnail: "https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png",
      logo: "https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png", // Travel logo
      documentPdf: "/MakeMyTrip_GradProject-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
      ],
      duration: "3 months",
      teamSize: "Academic project team",
      objective: "Analyze and improve MakeMyTrip's user journey and conversion optimization strategies",
      outcome: "Developed actionable recommendations that could improve conversion rates and user satisfaction",
      longDescription: [
        "Conducted in-depth analysis of MakeMyTrip's current user experience",
        "Identified key pain points in the booking journey",
        "Proposed solutions for improving conversion rates",
        "Developed comprehensive strategy for user engagement"
      ],
      methodology: [
        "User Journey Mapping",
        "Competitive Benchmarking",
        "Conversion Funnel Analysis",
        "UX Audit & Recommendations",
        "Market Research",
        "Strategic Planning"
      ],
      keyFindings: [
        "Booking abandonment occurred primarily at payment stage",
        "Mobile experience needed significant optimization",
        "Price comparison features were underutilized",
        "Customer support integration could reduce friction"
      ],
      tags: ['Travel Tech', 'UX Research', 'Conversion Optimization', 'Mobile Experience', 'E-commerce', 'Graduate Project'],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 103,
      title: "BookMyShow - Product Strategy",
      category: "Entertainment & Ticketing",
      description: "Strategic analysis and product recommendations for BookMyShow's platform optimization",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1200/0*LAP8e_FFBa1-LX52.jpeg",
      logo: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=80&h=80&fit=crop", // Entertainment logo
      documentPdf: "/NLBookMyShow-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1489599177986-d989f76c9390?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop"
      ],
      duration: "6 weeks",
      teamSize: "Product analysis team",
      objective: "Analyze BookMyShow's current platform and identify opportunities for growth and user engagement",
      outcome: "Delivered comprehensive strategy with actionable recommendations for platform enhancement",
      longDescription: [
        "Analyzed current user flow and identified optimization opportunities",
        "Researched competitor strategies and market positioning",
        "Developed recommendations for new features and improvements",
        "Created roadmap for implementation of suggested changes"
      ],
      methodology: [
        "Platform Analysis",
        "User Behavior Study",
        "Feature Gap Analysis",
        "Revenue Model Assessment",
        "Competitive Intelligence",
        "Growth Strategy Development"
      ],
      keyFindings: [
        "Seat selection process could be more intuitive",
        "Social features would increase engagement",
        "Recommendation engine needed improvement",
        "Payment options required diversification"
      ],
      tags: ['Entertainment', 'Product Strategy', 'User Experience', 'Platform Analysis', 'Growth Strategy', 'Ticketing'],
      color: "from-red-500 to-pink-600"
    },
    {
      id: 104,
      title: "EverythingPets - Product Analysis",
      category: "E-commerce & Pet Care",
      description: "Comprehensive product analysis and strategic recommendations for EverythingPets platform",
      thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1415369629392-2d1ec7ab7445?w=80&h=80&fit=crop", // Pet care logo
      documentPdf: "/NL_EverythingPets-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
      ],
      duration: "5 weeks",
      teamSize: "Product research team",
      objective: "Evaluate EverythingPets platform and develop strategic recommendations for market expansion",
      outcome: "Created detailed analysis with growth strategies and user experience improvements",
      longDescription: [
        "Conducted comprehensive analysis of the pet care e-commerce market",
        "Evaluated current platform capabilities and user experience",
        "Identified market opportunities and competitive advantages",
        "Developed strategic roadmap for platform enhancement"
      ],
      methodology: [
        "Market Research",
        "Platform Audit",
        "User Experience Analysis",
        "Competitor Benchmarking",
        "Business Model Evaluation",
        "Strategic Recommendations"
      ],
      keyFindings: [
        "Subscription model could increase customer lifetime value",
        "Pet care advice content would drive engagement",
        "Mobile app needed significant improvements",
        "Inventory management required optimization"
      ],
      tags: ['Pet Care', 'E-commerce', 'Market Analysis', 'Subscription Model', 'Mobile Strategy', 'Customer Retention'],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 105,
      title: "Rapido - Product Requirements Document",
      category: "Ride-sharing & Mobility",
      description: "Strategic PRD for Rapido's new features focusing on user acquisition and retention",
      thumbnail: "https://th.bing.com/th/id/OIP.MqGUX0TNQOzKZAlIkMsWLgHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      logo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=80&h=80&fit=crop", // Mobility logo
      documentPdf: "/RapidoPRD-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
      ],
      duration: "4 weeks",
      teamSize: "Product development team",
      objective: "Define new features and enhancements for Rapido's ride-sharing platform to improve user experience",
      outcome: "Delivered comprehensive PRD with detailed specifications for successful feature implementation",
      longDescription: [
        "Analyzed current user journey and identified pain points",
        "Defined new features to enhance rider and driver experience",
        "Created detailed technical specifications and user stories",
        "Established success metrics and implementation timeline"
      ],
      methodology: [
        "User Journey Analysis",
        "Feature Prioritization",
        "Technical Specification",
        "Stakeholder Collaboration",
        "Success Metrics Definition",
        "Implementation Planning"
      ],
      keyFindings: [
        "Real-time tracking accuracy needed improvement",
        "Driver-rider communication required enhancement",
        "Safety features were top priority for users",
        "Pricing transparency could improve satisfaction"
      ],
      tags: ['Mobility', 'Ride-sharing', 'PRD', 'User Experience', 'Safety Features', 'Real-time Tracking'],
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 106,
      title: "Swiggy - Strategic Case Study",
      category: "Food Delivery & Logistics",
      description: "In-depth case study analysis of Swiggy's business model and growth strategies",
      thumbnail: "https://th.bing.com/th/id/OIP.38vyuEPG3EjejRZ2TDZHQwHaDf?w=304&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      logo: "https://images.unsplash.com/photo-1565299624-4b87b5e36e44?w=80&h=80&fit=crop", // Food delivery logo
      documentPdf: "/Swiggy_CaseStudy-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop"
      ],
      duration: "8 weeks",
      teamSize: "Case study research team",
      objective: "Analyze Swiggy's business model, growth strategies, and market positioning in the food delivery sector",
      outcome: "Comprehensive case study with insights into successful scaling strategies and operational excellence",
      longDescription: [
        "Conducted thorough analysis of Swiggy's business model evolution",
        "Examined growth strategies and market expansion tactics",
        "Analyzed operational efficiency and logistics optimization",
        "Studied competitive positioning and differentiation strategies"
      ],
      methodology: [
        "Business Model Analysis",
        "Financial Performance Review",
        "Competitive Landscape Study",
        "Operational Efficiency Assessment",
        "Growth Strategy Evaluation",
        "Market Positioning Analysis"
      ],
      keyFindings: [
        "Hyperlocal focus was key to initial success",
        "Technology investment drove operational efficiency",
        "Partnership strategies accelerated market penetration",
        "Customer acquisition cost optimization was crucial"
      ],
      tags: ['Food Delivery', 'Business Strategy', 'Case Study', 'Logistics', 'Market Analysis', 'Scaling Operations'],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 107,
      title: "Zepto - New Feature PRD",
      category: "Quick Commerce & Delivery",
      description: "Product requirements document for new features in Zepto's quick commerce platform",
      thumbnail: "https://th.bing.com/th/id/OIP.ETg7au_trZPdwMIZencNKQHaEA?w=329&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=80&h=80&fit=crop", // Quick commerce logo
      documentPdf: "/ZeptoNewFeaturePRD-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
      ],
      duration: "5 weeks",
      teamSize: "Product development team",
      objective: "Define and specify new features for Zepto's quick commerce platform to enhance user experience and operational efficiency",
      outcome: "Successfully delivered PRD with detailed specifications leading to successful feature launches",
      longDescription: [
        "Analyzed current platform capabilities and user feedback",
        "Defined new features to improve delivery speed and accuracy",
        "Created comprehensive technical specifications",
        "Established implementation roadmap and success metrics"
      ],
      methodology: [
        "User Feedback Analysis",
        "Feature Definition & Prioritization",
        "Technical Requirements Gathering",
        "Stakeholder Alignment",
        "Success Metrics Planning",
        "Implementation Strategy"
      ],
      keyFindings: [
        "Inventory prediction needed AI-powered improvements",
        "User interface required simplification for faster ordering",
        "Delivery tracking transparency was highly valued",
        "Subscription model showed strong potential"
      ],
      tags: ['Quick Commerce', 'PRD', 'Delivery Optimization', 'User Experience', 'AI Integration', 'Subscription Model'],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 108,
      title: "Zomato - Product Requirements Document",
      category: "Food Discovery & Delivery",
      description: "Strategic PRD for Zomato's platform enhancements focusing on user engagement and restaurant partnerships",
      thumbnail: "https://th.bing.com/th/id/OIP.geXLenZLjUp2Ksm2DsXP8QAAAA?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=80&h=80&fit=crop", // Restaurant logo
      documentPdf: "/Zomato-PRD-Venkatesh.pdf",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
      ],
      duration: "6 weeks",
      teamSize: "Cross-functional product team",
      objective: "Develop comprehensive PRD for Zomato's new features to improve restaurant discovery and user engagement",
      outcome: "Delivered detailed requirements that enhanced user experience and increased restaurant partner satisfaction",
      longDescription: [
        "Analyzed user behavior patterns and restaurant partner feedback",
        "Defined features to improve food discovery and ordering experience",
        "Created detailed user stories and acceptance criteria",
        "Established metrics for measuring feature success"
      ],
      methodology: [
        "User Behavior Analysis",
        "Restaurant Partner Interviews",
        "Feature Specification",
        "User Story Development",
        "Technical Feasibility Assessment",
        "Success Metrics Definition"
      ],
      keyFindings: [
        "Personalized recommendations significantly improved engagement",
        "Restaurant rating system needed more nuanced approach",
        "Social features increased user retention",
        "Delivery time prediction accuracy was crucial for satisfaction"
      ],
      tags: ['Food Discovery', 'PRD', 'Restaurant Partnerships', 'Personalization', 'Social Features', 'Delivery Optimization'],
      color: "from-red-500 to-orange-600"
    }
  ];

  const prototypes = [
    {
      id: 201,
      title: "Product TOOL – For Product Managers",
      category: "Strategic Workspace",
      description: "A strategic workspace tailored for Product Managers to plan, prioritize, and track product development cycles",
      preview: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=80&fit=crop", // Management/Strategy logo
      liveUrl: "https://prd1-0.vercel.app",
      githubUrl: "#",
      longDescription: [
        "Strategic workspace designed specifically for Product Managers",
        "Features customizable roadmaps for long-term planning",
        "Includes idea repositories for innovation management",
        "User feedback tracker for customer-driven development",
        "Agile board integrations for seamless workflow management",
        "Clean UI designed for high usability and efficient decision-making"
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'],
      features: [
        "Customizable product roadmaps",
        "Idea repository management",
        "User feedback tracking",
        "Agile board integration",
        "Strategic planning tools"
      ],
      color: "from-blue-500 to-cyan-600",
      status: "Live",
      lastUpdated: "1 week ago"
    },
    {
      id: 202,
      title: "PharmaTracker – Warehouse Operations & Pharma Logistics",
      category: "Healthcare & Logistics",
      description: "A pharma inventory and warehouse management tool for streamlined supply chain operations",
      preview: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop", // Medical/Pharma logo
      liveUrl: "https://pharmatracker.vercel.app",
      githubUrl: "#",
      longDescription: [
        "Comprehensive pharma inventory management system",
        "Real-time tracking of medical stock and inventory levels",
        "Automated expiration alerts to prevent waste",
        "Advanced batch management for quality control",
        "Delivery status tracking for supply chain visibility",
        "Built to enhance visibility and reduce manual errors",
        "Improves traceability in pharmaceutical logistics"
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
      features: [
        "Real-time stock tracking",
        "Expiration date alerts",
        "Batch management system",
        "Delivery status monitoring",
        "Supply chain visibility"
      ],
      color: "from-green-500 to-emerald-600",
      status: "Live",
      lastUpdated: "3 days ago"
    },
    {
      id: 203,
      title: "GreenRoute – AI-Powered Route Optimizer for Heavy Vehicles",
      category: "AI & Logistics",
      description: "An AI-powered tool that recommends optimal travel routes for large vehicles based on multiple dynamic factors",
      preview: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=80&h=80&fit=crop", // Green/Environmental logo
      liveUrl: "https://green-10.vercel.app/",
      githubUrl: "#",
      longDescription: [
        "AI-powered route optimization specifically for heavy vehicles",
        "Considers weather conditions for safer travel planning",
        "Optimizes for distance, fuel efficiency, and environmental impact",
        "Accounts for road restrictions and vehicle specifications",
        "Reduces carbon footprint through intelligent routing",
        "Improves transport efficiency in logistics operations",
        "Designed for fleet operations and logistics companies"
      ],
      techStack: ['AI/ML', 'React', 'Python', 'Google Maps API', 'Vercel'],
      features: [
        "AI-powered route optimization",
        "Weather condition analysis",
        "Fuel efficiency calculations",
        "Environmental impact reduction",
        "Heavy vehicle restrictions mapping"
      ],
      color: "from-purple-500 to-pink-600",
      status: "Live",
      lastUpdated: "5 days ago"
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
        return 'Live Prototypes';
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
        return 'Live websites and applications deployed on Vercel with GitHub integration';
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

  const renderPrototypes = () => (
    <motion.div
      key="prototypes"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {prototypes.map((prototype, index) => (
        <motion.div
          key={prototype.id}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className="relative cursor-pointer group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden h-full"
        >
          {/* Preview Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={prototype.preview} 
              alt={prototype.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                {prototype.status}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="text-orange-400 text-sm font-medium uppercase tracking-wide">
                {prototype.category}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                {prototype.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {prototype.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {prototype.techStack.slice(0, 3).map((tech, idx) => (
                <span key={idx} className={`px-2 py-1 text-xs bg-gradient-to-r ${prototype.color} rounded-full text-white font-medium`}>
                  {tech}
                </span>
              ))}
              {prototype.techStack.length > 3 && (
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/60">
                  +{prototype.techStack.length - 3} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <motion.a
                href={prototype.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
              >
                <Globe size={16} />
                Live Demo
              </motion.a>
              <motion.a
                href={prototype.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg font-medium text-sm border border-white/20 hover:border-white/40 transition-colors"
              >
                <Github size={16} />
                Code
              </motion.a>
            </div>

            {/* Last Updated */}
            <div className="text-white/50 text-xs">
              Updated {prototype.lastUpdated}
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl flex items-center justify-center"
            onClick={() => setSelectedProject(prototype.id)}
          >
            <ExternalLink className="text-white/80" size={32} />
          </motion.div>
        </motion.div>
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
              { key: 'prototypes', label: 'Live Prototypes', icon: Code2 },
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
          {activeSection === 'case-studies' && renderCaseStudies()}
          {activeSection === 'prototypes' && renderPrototypes()}
          {(activeSection === 'projects' || activeSection === 'ai-agents') && renderOtherSections()}
        </AnimatePresence>

        {/* Modals */}
        <AnimatePresence>
          {selectedProject && activeSection === 'case-studies' && (
            <CaseStudyViewer
              caseStudy={caseStudies.find(cs => cs.id === selectedProject)!}
              onClose={() => setSelectedProject(null)}
            />
          )}
          
          {selectedProject && activeSection === 'prototypes' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const prototype = prototypes.find(p => p.id === selectedProject);
                  if (!prototype) return null;

                  return (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-4">
                        <h3 className="text-4xl font-bold text-white">{prototype.title}</h3>
                        <p className="text-xl text-white/70">{prototype.description}</p>
                      </div>

                      {/* Preview Image */}
                      <div className="relative rounded-2xl overflow-hidden">
                        <img 
                          src={prototype.preview} 
                          alt={prototype.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Technical Implementation</h4>
                        <ul className="text-white/80 space-y-2">
                          {prototype.longDescription.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-blue-400 mt-2 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {prototype.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                              <div className={`w-2 h-2 bg-gradient-to-r ${prototype.color} rounded-full`}></div>
                              <span className="text-white/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Technology Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {prototype.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-4 py-2 bg-gradient-to-r ${prototype.color} rounded-full text-white font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 justify-center">
                        <motion.a
                          href={prototype.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                        >
                          <Globe size={20} />
                          View Live Demo
                        </motion.a>
                        <motion.a
                          href={prototype.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 hover:border-white/40 transition-colors"
                        >
                          <Github size={20} />
                          View Source Code
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(null)}
                          className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:border-white/40 transition-colors"
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
          
          {selectedProject && activeSection !== 'case-studies' && activeSection !== 'prototypes' && (
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
