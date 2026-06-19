export const cvData = {
  personalInfo: {
    name: "Min Khant Maw",
    title: "Full Stack Developer",
    secondaryTitle: "Laravel & Vue.js",
    email: "mr.minkhantmaw@gmail.com",
    phone: "+95 9 422525583",
    linkedin: "www.linkedin.com/in/minkhantmaw",
    github: "github.com/minkhantmaw",
    location: "Yangon, Myanmar",
  },
  summary:
    "Full Stack Developer with 3.5+ years of experience developing, maintaining, and enhancing enterprise web applications using PHP, Laravel, Vue.js, and JavaScript. Experienced in building financial management systems, approval workflow platforms, estate management solutions, POS systems, and digital wallet applications. Strong expertise in RESTful API development, authentication and authorization, role-based access control, and transaction processing. Hands-on experience with Redis caching, queue processing, Docker containerization, AWS deployment, Linux server administration, Nginx configuration, and CI/CD automation using GitHub Actions.",
  skills: {
    backend: ["PHP", "Laravel", "RESTful API Development", "API Authentication (Passport, Sanctum, JWT)"],
    frontend: ["JavaScript", "Vue.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    database: ["MySQL"],
    devops: ["Linux", "Docker", "AWS", "Nginx", "CI/CD", "GitHub Actions"],
    caching: ["Redis", "Laravel Queue", "Background Job Processing", "Event Broadcasting"],
    api: ["Swagger / OpenAPI", "Third-Party API Integration", "API Documentation"],
    tools: ["Git", "GitHub", "Postman", "Swagger"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Analytical Thinking", "Continuous Learning", "Adaptability"]
  },
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Onenex Co., Ltd",
      duration: "Aug 2023 – Present",
      projects: [
        {
          name: "Estate Management Project — Finance & Estate Management Web Application",
          features: "User Management, Role & Permission Management, Invoice Management, Cash In / Cash Out, Transaction Management, Wallet & Deposit Management, Approval & Rejection Workflow.",
          responsibilities: [
            "Developed and maintained financial management modules including invoicing, cash in/out, and transaction tracking.",
            "Designed and implemented transaction processing and wallet/deposit management workflows.",
            "Built RESTful APIs for frontend integration and developed approval/rejection workflows.",
            "Implemented role-based access control and permission systems; optimized database queries and performance.",
            "Worked with Redis and queue systems for background processing; participated in production deployment."
          ],
          technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "REST API", "Swagger"]
        },
        {
          name: "TTAS Project — Finance Approval Web Application",
          features: "User Management, Role & Permission Management, Multi-Level Approval Workflow, Financial Approval Processes.",
          responsibilities: [
            "Developed backend APIs and business logic for multi-level financial approval workflows.",
            "Built role and permission management modules with secure authentication and authorization.",
            "Maintained API documentation using Swagger; fixed bugs and enhanced existing features."
          ],
          technologies: ["Laravel", "Vue.js", "MySQL", "REST API", "Swagger"]
        },
        {
          name: "Kant Kaw Taw Library Management System",
          responsibilities: [
            "Maintained and enhanced existing features; fixed application bugs and performance issues.",
            "Improved database operations and system stability; provided ongoing support and maintenance."
          ],
          technologies: ["Laravel", "Bootstrap", "MySQL"]
        }
      ]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "XSphere Co., Ltd",
      duration: "Nov 2022 – Jul 2023",
      projects: [
        {
          name: "POS System (B2B & C2C)",
          features: "Product Management, Inventory Management, Stock Control, Sales Management.",
          responsibilities: [
            "Maintained and enhanced POS system features including product, inventory, and stock control.",
            "Developed stock control functionality; fixed production issues and optimized workflows."
          ],
          technologies: ["PHP", "Laravel", "JavaScript", "MySQL"]
        },
        {
          name: "Office Management Web Application",
          responsibilities: [
            "Provided application maintenance and support, bug fixing, and feature enhancements.",
            "Managed and optimized database operations."
          ],
          technologies: ["PHP", "Laravel", "MySQL"]
        }
      ]
    }
  ],
  personalProjects: [
    {
      id: 1,
      name: "PayMal Wallet Web Application",
      link: "https://github.com/MinKhantMaw/pay",
      description: "Developed a Laravel 11-based digital wallet application supporting wallet creation, money transfers, transaction tracking, notifications, and QR-style scan-and-pay functionality, including both user and administrator interfaces.",
      features: "User Registration & Authentication, Wallet Balance Tracking, Internal Wallet Transfers, Transaction History, QR Scan-and-Pay, Real-Time Notifications, Admin Dashboard, User Management, Wallet Management, Notification Management, RESTful APIs.",
      responsibilities: [
        "Designed and developed the complete system architecture, including wallet and transaction management modules.",
        "Implemented secure transfer mechanisms and REST APIs for frontend integration.",
        "Integrated real-time notification broadcasting.",
        "Configured deployment using Docker and AWS; built administrator management functionality."
      ],
      technologies: ["Laravel 11", "PHP", "MySQL", "Redis", "Queue", "Docker", "AWS", "Bootstrap", "JavaScript", "REST API"]
    }
  ],
  achievements: [
    "Developed and maintained multiple enterprise-level web applications across finance, estate management, and POS domains.",
    "Built financial management and multi-level approval workflow systems used in live business operations.",
    "Implemented role-based access control systems for complex business workflows.",
    "Improved application performance using Redis caching and queue-based background processing.",
    "Automated deployment workflows through GitHub Actions CI/CD pipelines.",
    "Designed and built a complete digital wallet platform end-to-end as a personal project."
  ],
  education: {
    degree: "Bachelor of Arts (Distance Education)",
    institution: "Maubin University",
    year: "Currently Third Year (Myanmar)"
  },
  languages: [
    { language: "Burmese", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate" }
  ]
};
