export const categories = ["All", "Web Apps", "Data", "Script", "Line OA"]

export const projects = [
    {
      category: "Web Apps",
      type: "Educational",
      name: "Grammora",
      roleType: "Full Stack Developer",
      contributors: [
        "Chanakan Ukhaow",
      ],
      screenshot: [
        "/assets/projects/grammora/logo.svg",
        "/assets/projects/grammora/1.png",
        "/assets/projects/grammora/2.png",
        "/assets/projects/grammora/3.png",
        "/assets/projects/grammora/4.png",
        "/assets/projects/grammora/5.png",
        "/assets/projects/grammora/6.png",
        "/assets/projects/grammora/7.png",
        "/assets/projects/grammora/8.png",
        "/assets/projects/grammora/9.png",
      ],
      techIcons: [
        { icon: "/assets/logo-stack/NextJS.png", name: "Next.js" },
        { icon: "/assets/logo-stack/TypeScript.png", name: "TypeScript" },
        { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
        { icon: "/assets/logo-stack/Prisma.png", name: "Prisma ORM" },
        { icon: "/assets/logo-stack/PostgreSQL.png", name: "PostgreSQL" }
      ],
      desc: "English grammar and speaking learning platform with gamification, featuring Google Gemini AI as a personal coach and a premium subscription system.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Google Gemini AI",
        "NextAuth.js",
        "Omise API"
      ],
      contribution:
        "Architected the full-stack application, integrated Google Gemini AI for grammar evaluation, implemented Omise payment gateway, and built gamified learning features.",
      demo: "https://grammora.vercel.app/",
      detail: [
        {
          title: "Overview",
          desc: [
            "Grammora is an English learning platform that combines gamification with advanced AI capabilities to help users improve their grammar and speaking skills.",
            "The platform uses Google Gemini AI as a personal language coach, offering grammar explanations, image analysis, and speaking evaluation.",
            "It features a freemium model with a built-in payment system for premium access."
          ]
        },
        {
          title: "Features",
          desc: [
            "Interactive grammar games including quizzes, fill-in-the-blanks, matching, and sentence ordering.",
            "Speaking practice games with Web Speech API for voice-to-text conversion and AI evaluation.",
            "AI chatbot for grammar explanation and Q&A using Google Gemini API.",
            "Premium subscription system with automated tier management and AI quota rate limiting.",
            "Secure payment integration via Omise API for seamless checkout.",
            "User progress tracking, scoring system, and streak management."
          ]
        },
        {
          title: "Contribution",
          desc: [
            "Architected the full-stack application using Next.js App Router and TypeScript.",
            "Designed and implemented the database schema using Prisma and PostgreSQL (Supabase).",
            "Integrated Google Gemini AI with multi-model fallback and quota management systems.",
            "Developed secure authentication using NextAuth.js with Google OAuth.",
            "Implemented subscription tier logic and integrated Omise payment gateway for premium packages."
          ]
        }
      ]
  },
  {
    category: "Web Apps",
    type: "Educational",
    name: "HealJai",
    roleType: "Team",
    contributors: [
      "Chanakan Ukhaow",
      "Jackapong Karapinvong",
      "Yuttapoom Haphanom",
      "Anon Yanying"
    ],
    screenshot: [
      "/assets/projects/healjai/logo.png",
      "/assets/projects/healjai/1.png",
      "/assets/projects/healjai/2.png",
      "/assets/projects/healjai/3.png",
      "/assets/projects/healjai/4.png",
      "/assets/projects/healjai/5.png",
    ],
    techIcons: [
      { icon: "/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/assets/logo-stack/js.png", name: "JavaScript" },
      { icon: "/assets/logo-stack/indexeddb.png", name: "IndexedDB" }
    ],
    desc: "Mental wellness tracking and activity booking platform designed for university students.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Vue Router",
      "IndexedDB"
    ],
    contribution:
      "Developed F3 Supportive Articles & Relaxation Activities and contributed to shared collaboration features in F5.",
    demo: "https://heal-jai.vercel.app/",
    detail: [
      {
        title: "Overview",
        desc: [
          "HealJai is a mental wellness support web application created for university students.",
          "The platform helps users track emotions, read supportive content, join relaxation activities, and improve self-awareness in a safe digital environment.",
          "The project focuses on accessibility, calming UI/UX, and supportive interaction experiences."
        ]
      },
      {
        title: "Features",
        desc: [
          "Mood tracking and emotional journaling system.",
          "Mental health dashboard with emotion analytics and calendar records.",
          "Supportive article system with search, sort, and filter functionality.",
          "Relaxation activities that users can access directly from the web application.",
          "Activity booking system with seat status handling and booking management.",
          "Future self letter feature using IndexedDB for local persistent storage."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Developed F3 Supportive Articles & Relaxation Activities feature.",
          "Designed article card layouts and supportive content interfaces.",
          "Implemented search, sort, and filter systems for articles.",
          "Built relaxation activity pages and detail routing with Vue Router.",
          "Contributed to shared F5 collaboration features including UI feedback and interaction flow."
        ]
      }
    ]
  },

  {
    "category": "Line OA",
    "type": "Automation & Finance",
    "name": "Bill Check",
    "roleType": "Individual",
    "contributors": [
      "Chanakan Ukhaow"
    ],
    "screenshot": [
      "/assets/projects/billcheck/logo.png",
      "/assets/projects/billcheck/flow.png",
      "/assets/projects/billcheck/sheet-log.png",
      "/assets/projects/billcheck/sheet-summary.png",
      "/assets/projects/billcheck/1.jpg",
      "/assets/projects/billcheck/2.png",
      "/assets/projects/billcheck/3.png",
      "/assets/projects/billcheck/4.png",
    ],
    "techIcons": [
      {
        "icon": "/assets/logo-stack/line.png",
        "name": "LINE Messaging API"
      },
      {
        "icon": "/assets/logo-stack/make.png",
        "name": "Make.com"
      },
      {
        "icon": "/assets/logo-stack/gemini.png",
        "name": "Google Gemini AI"
      },
      {
        "icon": "/assets/logo-stack/sheet.png",
        "name": "Google Sheets"
      }
    ],
    "desc": "An intelligent LINE OA chatbot acting as an accounting assistant, processing text, audio, and image inputs to automate billing and track expenses.",
    "tech": [
      "LINE Messaging API",
      "Make.com",
      "Google Gemini AI",
      "Google Sheets",
      "JSON"
    ],
    "contribution": "Architected the complete automation flow, integrated Gemini AI for multi-modal intent parsing, and configured the Google Sheets database.",
    "demo": "https://line.me/R/ti/p/@988hjhoo",
    "detail": [
      {
        "title": "Overview",
        "desc": [
          "Bill Check is an automated accounting assistant built on LINE Official Account.",
          "The system allows users to track purchases, payments, and outstanding balances effortlessly using natural language, voice memos, or slip images.",
          "It eliminates manual data entry by utilizing AI to automatically extract intents, calculate net balances, and record data directly into Google Sheets."
        ]
      },
      {
        "title": "Features",
        "desc": [
          "Multi-modal input processing supporting Text, Audio (m4a), and Images (slips/receipts).",
          "Automated intent parsing into structured JSON arrays using Google Gemini AI.",
          "Interactive LINE Postback template buttons for user confirmation before saving data.",
          "Real-time database integration with Google Sheets for searching, adding, and aggregating transactions.",
          "Multi-user transaction handling within a single prompt (e.g., parsing multiple names and amounts simultaneously)."
        ]
      },
      {
        "title": "Contribution",
        "desc": [
          "Designed and implemented the entire Make.com integration flow and routing logic.",
          "Created custom Gemini AI prompts to strictly output JSON formats and handle complex user intents.",
          "Configured LINE Messaging API for push messages, reply messages, and interactive buttons.",
          "Set up Google Sheets modules for tracking user transactions and calculating accumulated balances."
        ]
      }
    ]
  },

  {
    category: "Web Apps",
    type: "Frontend Development",
    name: "Fylo Website Clone",
    roleType: "Individual",
    contributors: ["Chanakan Ukhaow"],
    screenshot: [
      "/assets/projects/fylo/1.png",
      "/assets/projects/fylo/2.png",
      "/assets/projects/fylo/3.png",
      "/assets/projects/fylo/4.png",
      "/assets/projects/fylo/5.png"
    ],
    techIcons: [
      { icon: "/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/assets/logo-stack/js.png", name: "JavaScript" }
    ],
    desc: "Responsive Fylo landing page clone built with Vue and Tailwind CSS.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design"
    ],
    contribution:
      "Designed and developed the entire project independently including UI implementation, responsive layouts, and deployment.",
    demo: "https://int250-fylo-website-006.netlify.app/",
    github: "https://github.com/Chanakanit/fylo-website.git",
    detail: [
      {
        title: "Overview",
        desc: [
          "Fylo Website Clone is a responsive frontend web project inspired by the Fylo landing page design.",
          "The project focuses on recreating modern UI layouts with responsive behavior across desktop and mobile devices.",
          "The application was built independently to practice frontend development and responsive web design skills."
        ]
      },
      {
        title: "Features",
        desc: [
          "Responsive layout for desktop, tablet, and mobile devices.",
          "Modern landing page UI with reusable components.",
          "Interactive sections and clean visual hierarchy.",
          "Optimized spacing, typography, and responsive navigation.",
          "Deployed online using Netlify."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Designed and developed the entire frontend independently.",
          "Implemented responsive layouts using Tailwind CSS.",
          "Built reusable Vue components and page structure.",
          "Handled deployment and project configuration."
        ]
      }
    ]
  },

  {
    category: "Script",
    type: "CLI Application",
    name: "Flashcards System",
    roleType: "Individual",
    contributors: ["Chanakan Ukhaow"],
    screenshot: [
      "/assets/projects/flashcards/1.png",
      "/assets/projects/flashcards/2.png",
      "/assets/projects/flashcards/3.png",
      "/assets/projects/flashcards/4.png",
      "/assets/projects/flashcards/5.png",
      "/assets/projects/flashcards/6.png",
    ],
    techIcons: [
      { icon: "/assets/logo-stack/python.png", name: "Python" }
    ],
    desc: "Command-line flashcard application for creating, managing, and reviewing study questions with user authentication support.",
    tech: [
      "Python",
      "Object-Oriented Programming (OOP)",
      "CLI",
      "File Handling",
      "Separation of Concerns"
    ],
    contribution:
      "Designed and developed the entire application independently including authentication system, flashcard management, quiz logic, and data handling architecture.",
    github: "https://github.com/Chanakanit/Flashcards.git",
    detail: [
      {
        title: "Overview",
        desc: [
          "Flashcards System is a command-line study assistant application developed with Python.",
          "The application allows users to create, manage, and review flashcards through an interactive CLI interface.",
          "The project was designed using Object-Oriented Programming (OOP) principles with clear separation between Business Logic and User Interface components."
        ]
      },
      {
        title: "Features",
        desc: [
          "User registration and login system using student ID and password validation.",
          "Password reset functionality for account recovery.",
          "Create, display, edit, and delete flashcard questions and answers.",
          "Reset all flashcards for individual users.",
          "Randomized quiz mode with answer validation and score summary.",
          "User-based data separation for personalized flashcard management."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Designed the complete application architecture independently.",
          "Implemented authentication and user management system.",
          "Developed flashcard CRUD operations and quiz functionality.",
          "Applied OOP concepts and separation of concerns for maintainable code structure.",
          "Managed file handling and command-line interaction flow."
        ]
      }
    ]
  },

  {
    category: "Web Apps",
    type: "Frontend Development",
    name: "LearnSpace UI",
    roleType: "Individual",
    contributors: ["Chanakan Ukhaow"],
    screenshot: [
      "/assets/projects/learnspace/1.png",
      "/assets/projects/learnspace/2.png",
      "/assets/projects/learnspace/3.png",
    ],
    techIcons: [
      { icon: "/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/assets/logo-stack/js.png", name: "JavaScript" }
    ],
    desc: "Modern educational platform UI focused on responsive layouts and clean learning experiences.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design"
    ],
    contribution:
      "Designed and developed the entire UI independently including responsive pages, layout systems, and frontend interactions.",
    demo: "https://int250-leanspace-ui-006.netlify.app/",
    github: "https://github.com/Chanakanit/LearnSpace-UI.git",
    detail: [
      {
        title: "Overview",
        desc: [
          "LearnSpace UI is a modern educational platform interface built to practice frontend development and responsive web design.",
          "The project focuses on creating clean layouts, user-friendly navigation, and visually engaging learning interfaces.",
          "The application was developed independently using Vue 3 and Tailwind CSS."
        ]
      },
      {
        title: "Features",
        desc: [
          "Responsive layouts optimized for desktop, tablet, and mobile devices.",
          "Modern educational dashboard and landing page design.",
          "Reusable UI components and structured page sections.",
          "Clean typography, spacing, and visual hierarchy.",
          "Interactive frontend elements with responsive navigation."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Designed the complete UI and page structure independently.",
          "Implemented responsive layouts using Tailwind CSS.",
          "Built reusable Vue components and frontend interactions.",
          "Managed deployment and frontend project configuration."
        ]
      }
    ]
  },

  {
    category: "Web Apps",
    type: "Educational",
    name: "Integrated Project 2025",
    roleType: "Team",
    contributors: [
      "Chanukah Unkhaow",
      "JACKAPONG KARAPINVONG",
      "NATTHASITH BOONHENG"
    ],
    screenshot: [
      "/assets/projects/ecors/ecors-1.png",
      "/assets/projects/ecors/ecors-2.png"
    ],
    techIcons: [
      { icon: "/assets/logo-stack/html.png", name: "HTML" },
      { icon: "/assets/logo-stack/CSS3.svg", name: "CSS" },
      { icon: "/assets/logo-stack/js.png", name: "JavaScript" },
      { icon: "/assets/logo-stack/Node.js.png", name: "Node.js" },
      { icon: "/assets/logo-stack/Express.png", name: "Express" },
      { icon: "/assets/logo-stack/MySQL.png", name: "MySQL" },
      { icon: "/assets/logo-stack/docker.png", name: "Docker" },
      { icon: "/assets/logo-stack/keycloak.png", name: "Keycloak" }
    ],
    desc: "Study plan reservation system with authentication and real-time management features.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
      "Docker",
      "Keycloak",
      "Cypress"
    ],
    contribution:
      "Developed frontend and backend features, integrated Keycloak authentication, managed database structure, and configured Docker environment.",
    detail: [
      {
        title: "Overview",
        desc: [
          "Web-based study plan reservation and management system for students.",
          "The system supports secure authentication and role-based access using Keycloak.",
          "Frontend, backend, and database services are containerized with Docker for easier deployment and development."
        ]
      },
      {
        title: "Features",
        desc: [
          "Secure login and authentication with Keycloak.",
          "Reserve, update, and cancel study plans through an interactive interface.",
          "Real-time status tracking and data management.",
          "REST API integration with Express.js backend.",
          "MySQL database integration for storing reservation data.",
          "Docker Compose setup for multi-service deployment.",
          "End-to-end testing support using Cypress."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Integrated Keycloak authentication and protected routes.",
          "Developed frontend interfaces and backend APIs.",
          "Designed and managed MySQL database structure.",
          "Configured Docker and Docker Compose services.",
          "Connected frontend, backend, database, and authentication services together."
        ]
      }
    ]
  },
  {
    category: "Web Apps",
    type: "Frontend Development",
    name: "Loopstudios Website",
    roleType: "Individual",
    contributors: ["Chanakan Ukhaow"],
    screenshot: [
      "/assets/projects/loopstudios/1.png",
      "/assets/projects/loopstudios/2.png",
      "/assets/projects/loopstudios/3.png",
    ],
    techIcons: [
      { icon: "/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/assets/logo-stack/js.png", name: "JavaScript" }
    ],
    desc: "Responsive Loopstudios landing page clone with modern UI and immersive layout design.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design"
    ],
    contribution:
      "Designed and developed the entire frontend independently including responsive layouts, interactive navigation, and deployment.",
    demo: "https://int250-loopstudios.netlify.app/",
    github: "https://github.com/Chanakanit/Loopstudios.git",
    detail: [
      {
        title: "Overview",
        desc: [
          "Loopstudios Website is a modern landing page clone inspired by the Loopstudios design challenge.",
          "The project focuses on responsive UI implementation, visual hierarchy, and immersive web layouts.",
          "The application was built independently to strengthen frontend development and responsive design skills."
        ]
      },
      {
        title: "Features",
        desc: [
          "Responsive layouts optimized for desktop, tablet, and mobile devices.",
          "Modern hero section with immersive visual design.",
          "Interactive navigation menu and clean content sections.",
          "Reusable frontend components with responsive grids.",
          "Optimized typography, spacing, and user experience."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Designed and developed the complete frontend independently.",
          "Implemented responsive layouts using Tailwind CSS.",
          "Built reusable Vue components and interactive UI sections.",
          "Managed deployment and frontend project structure."
        ]
      }
    ]
  },
  {
    category: "Data",
    type: "Database Design",
    name: "Hello World 2025 Room Booking System",
    roleType: "Team",
    contributors: [
      "Chanakan Ukhaow",
      "Benyapa Wannalookkhee"
    ],
    screenshot: [
      "/assets/projects/helloworld/1.png"
    ],
    techIcons: [
      { icon: "/assets/logo-stack/MySQL.png", name: "MySQL" }, // แก้ไข /assets/assets/ ที่ซ้อนกันออกแล้ว
    ],
    desc: "Room booking system database design project created for Hello World 2025 activity.",
    tech: [
      "MySQL",
      "ER Diagram",
      "Database Design",
      "Relational Database"
    ],
    contribution:
      "Designed database structure, entity relationships, booking workflow, and user management system together with the team.",
    detail: [
      {
        title: "Overview",
        desc: [
          "Hello World 2025 Room Booking System is a database design project developed for faculty room reservation management.",
          "The system was designed to manage room booking schedules, users, staff assignments, and booking status handling.",
          "The project focuses on relational database structure, entity relationship design, and efficient booking management workflows."
        ]
      },
      {
        title: "Features",
        desc: [
          "Room reservation and booking management system.",
          "User account and role management.",
          "Room information management including capacity and building zones.",
          "Staff assignment system based on responsible areas.",
          "Booking status tracking with start time and end time handling.",
          "Entity relationship design with normalized relational database structure."
        ]
      },
      {
        title: "Contribution",
        desc: [
          "Designed ER Diagram and relational database structure.",
          "Created entity relationships between users, rooms, bookings, and staff.",
          "Planned booking workflow and database normalization.",
          "Collaborated on database analysis and system design documentation."
        ]
      }
    ]
  }
]