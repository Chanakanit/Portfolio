export const categories = ["All", "Web Apps", "Data", "Script"]

export const projects = [
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
      "/src/assets/projects/healjai/logo.png",
      "/src/assets/projects/healjai/1.png",
      "/src/assets/projects/healjai/2.png",
      "/src/assets/projects/healjai/3.png",
      "/src/assets/projects/healjai/4.png",
      "/src/assets/projects/healjai/5.png",
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/src/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" },
      { icon: "/src/assets/logo-stack/indexeddb.png", name: "IndexedDB" }
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
    category: "Web Apps",
    type: "Frontend Development",
    name: "Fylo Website Clone",
    roleType: "Individual",
    contributors: ["Chanakan Ukhaow"],
    screenshot: [
      "/src/assets/projects/fylo/1.png",
      "/src/assets/projects/fylo/2.png",
      "/src/assets/projects/fylo/3.png",
      "/src/assets/projects/fylo/4.png",
      "/src/assets/projects/fylo/5.png"
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/src/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" }
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
      "/src/assets/projects/flashcards/1.png",
      "/src/assets/projects/flashcards/2.png",
      "/src/assets/projects/flashcards/3.png",
      "/src/assets/projects/flashcards/4.png",
      "/src/assets/projects/flashcards/5.png",
      "/src/assets/projects/flashcards/6.png",
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/python.png", name: "Python" }
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
      "/src/assets/projects/learnspace/1.png",
      "/src/assets/projects/learnspace/2.png",
      "/src/assets/projects/learnspace/3.png",
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/src/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" }
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
      "/src/assets/projects/ecors/ecors-1.png",
      "/src/assets/projects/ecors/ecors-2.png"
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/html.png", name: "HTML" },
      { icon: "/src/assets/logo-stack/CSS3.svg", name: "CSS" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" },
      { icon: "/src/assets/logo-stack/Node.js.png", name: "Node.js" },
      { icon: "/src/assets/logo-stack/Express.png", name: "Express" },
      { icon: "/src/assets/logo-stack/MySQL.png", name: "MySQL" },
      { icon: "/src/assets/logo-stack/docker.png", name: "Docker" },
      { icon: "/src/assets/logo-stack/keycloak.png", name: "Keycloak" }
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
      "/src/assets/projects/loopstudios/1.png",
      "/src/assets/projects/loopstudios/2.png",
      "/src/assets/projects/loopstudios/3.png",
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/Vue.png", name: "Vue 3" },
      { icon: "/src/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" }
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
      "/src/assets/projects/helloworld/1.png"
    ],
    techIcons: [
      { icon: "/src/assets/logo-stack/MySQL.png", name: "MySQL" },
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