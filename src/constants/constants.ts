export const myDetails = {
  name: "Kanika Bhagat",
  title: "Team Lead / Senior Software Developer",
  gitLink: "https://github.com/kanikaagrawal97",
  linkedinLink: "https://www.linkedin.com/in/kanikabhagat/",
  email: "kanikaagrawal1997@gmail.com",
  phone: "+91-7600744043",
  avatar: "kanika.jpeg",
  resume: "Kanika CV.pdf",
  summary: [
    "Senior Software Developer and Technical Team Lead with over 6 years of experience in delivering high-impact web and mobile applications using React.js and React Native.",
    "Proven track record of managing the complete project lifecycle, from requirement gathering and strategic client interaction and successful multi-platform deployments.",
    "A result-oriented critical thinker and mentor dedicated to building high-performing teams, optimizing development workflows, and delivering scalable solutions that drive business growth.",
  ],
};

export const workExperience = [
  {
    role: "Technical Team Leader",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "March 2025",
    end: "March 2026",
    responsibilities: [
      "Led a cross-functional team of developers to deliver web and mobile applications.",
      "Client communication, Project estimation/timeline creation for the project",
      "Developed and deployed several mobile applications including Coables",
      "Worked on several web applications including Recruitment Smart",
      "Created MS Teams app for Recruitement Smart",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Feb 2024",
    end: "March 2025",
    responsibilities: [
      "Successfully managed and completed React JS projects including Baru etc.",
      "Built and worked on several React Native applications including HFHG etc.",
      "Training interns/team members",
      "Client interaction",
      "Deployed several Android and IOS apps to respective stores",
    ],
  },
  {
    role: "Software Developer(L1)",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Feb 2023",
    end: "Feb 2024",
    responsibilities: [
      "Successfully managed and completed React JS projects including Baru, LMS etc.",
      "Built and worked on several React Native applications including Cultisan, Soli, etc.",
      "Training interns/team members",
      "Client interaction",
      "Deployed several Android and IOS apps to respective stores",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Oct 2020",
    end: "Feb 2023",
    responsibilities: [
      "Built mobile applications using React native and deployed them",
      "Worked on several React JS web applications",
      "Trained on React JS",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Neoyug Tech",
    logo: "bcube.gif",
    location: "Surat",
    start: "July 2020",
    end: "Oct 2020",
    responsibilities: [
      "Worked on several live projects like Flymates and Wiseapp",
    ],
  },
  {
    role: "Intern",
    company: "Neoyug Tech",
    logo: "bcube.gif",
    location: "Surat",
    start: "Jan 2020",
    end: "July 2020",
    responsibilities: [
      "Got trained with React Native",
      "Helped team with tasks accross various projects",
    ],
  },
];

export const education = [
  {
    institution: "Bhagwan Mahavir College of Computer Application",
    degree: "Bachelor of Computer Application",
    duration: "2015 - 2018",
    link: "https://bmusurat.ac.in/bmu_website/home/welcome",
  },
  {
    institution:
      "Dhirubhai Ambani Institute of Information and Communication Technology",
    degree: "Master of Science: Information Technology",
    duration: "2018 - 2020",
    link: "https://www.daiict.ac.in/",
  },
];

export const skills = {
  technical: {
    Frontend: ["React Native", "React.js", "HTML", "CSS", "JavaScript"],
    Firebase: ["Auth", "Firestore", "Realtime Database", "Storage"],
    "State Management": [
      "Redux Core",
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "MobX",
      "AsyncStorage",
    ],
    "Real-Time, Media & APIs": ["Socket.io", "VideoSdk", "ClickUp API"],
    Payments: ["Stripe", "Razorpay"],
    "Code Quality": ["ESLint", "Prettier", "Husky", "SonarQube"],
    Other: ["MS teams plugin app", "Joi", "Yup", "i18n"],
    "Design Frameworks": ["MaterialUI", "React Native Paper"],
  },
  soft: [
    "Leadership & Team Management",
    "Agile Project Management (Scrum)",
    "Strong Communication & Collaboration",
    "Quick Learning & Adaptability",
    "Client interaction",
  ],
};

export const webosmoticProjects = [
  {
    title: "Coables",
    description:
      "An online platform connecting parents of autistic children with therapists. The system includes a React JS web application and a React Native mobile app, featuring flexible therapist scheduling, a parent booking system, Razorpay payment integration, and VideoSdk-based video calling with a custom note-taker feature.",
    highlights: [
      "Created the mobile application from scratch and also worked on React JS web app",
      "Integrated VideoSdk for real-time video consultations and contributed to resolving open issues in the SDK.",
      "Developed a custom note-taker feature within the video calling flow for therapists.",
      "Integrated Razorpay for secure session payments.",
      "Successfully published both Android and iOS applications to the Play Store and App Store.",
    ],
    technologies: [
      "React JS",
      "React Native",
      "VideoSdk",
      "Razorpay",
      "Redux Toolkit",
      "Firebase",
    ],
  },
  {
    title: "Recruitment Smart",
    description:
      "This platform aims to streamline and enhance recruitment by providing a robust interview scheduling, preparation, and analysis system integrated with MS Teams. The solution leverages AI-based insights (provided by the client's APIs) and seamless communication tools to assist HR, recruiters, and interview panels in conducting effective interviews.",
    highlights: [
      "Created the web portal for interview scheduling and details viewing.",
      "Developed and published the MS Teams plugin app that enables interviewers to view candidate details and job info.",
      "Integrated live question marking for questions asked.",
      "Implemented real-time displaying notification for talk ratio assist interviewers during the process.",
    ],
    technologies: [
      "React JS",
      "MS Teams API",
      "MS Teams Plugin App",
      "Redux RTK",
      "Material UI",
    ],
  },
  {
    title: "Baru",
    description:
      "It is a platform that enables a user to place orders for the custom built cabinets. It lets customers select various custom properties and size for any cabinet that they want to get built and check it’s costing realtime on every single property change. It also has clickup integration where the tickets for every newly placed order are created with all the details of that particular order.",
    highlights: [
      "Created the whole frontend using React JS andmaterialUI asUI framework.",
      "Added clickup integration and API implementations",
      "Created functions for complex cabinet calculations to get realtime total cost as well as order totals.",
      "Led team and did client interaction and demos",
    ],
    technologies: ["React JS", "Material UI", "Clickup API"],
  },
  {
    title: "Ramsell",
    description:
      "A healthcare mobile application built on the Expo Bare workflow, designed for dynamic user data collection. The app utilizes complex dynamic JSON structures to render interfaces based on the user's selected state, ensuring a tailored data collection process.",
    highlights: [
      "Worked on enhancing and maintaining existing functionalities and features.",
      "Improved application stability by identifying and resolving critical QA bugs.",
      "Worked on a dynamic data collection system using complex JSON configurations driven by state-specific logic.",
      "Worked on internationalization (i18n) support for English and Spanish languages.",
    ],
    technologies: ["React Native", "Expo", "i18n", "MobX"],
  },
  {
    title: "Soli",
    description:
      "Soli empowers successful farming. Users get access to educational videos to help them grow better quality crops and raise healthier, more productive stock. Soli’s dedicated marketplace and support features connect users with farm advisors who can assist them in identifying problems, finding solutions and accessing quality products and services",
    highlights: [
      "Built app from scratch",
      "Integrated Figma designs and Rest APIs provided by client",
      "Made it offline-first app",
      "Managed deep-links using firebase",
      "Led team and did client interaction and demos",
    ],
    technologies: ["React Native", "Redux toolkit", "Firebase"],
  },
  {
    title: "HFHG",
    description:
      "A specialized lead management mobile application for a hair clinic to track the complete lead lifecycle. The app streamlines the process from initial consultation and communication to costing, surgery scheduling, and quotation generation.",
    highlights: [
      "Built the entire application from scratch for managing hair clinic operations.",
      "Integrated call log retrieval from the device.",
      "Integrated Figma designs and Rest APIs.",
    ],
    technologies: ["React Native", "Redux toolkit", "Firebase"],
  },
  {
    title: "Cultisan",
    description:
      "It is a mobile application that helps users to connect with the world’s finest farmers, food and winemakers and make it easy and fair for them to buy their products. User can view the producers, their details, their products, contents related to them, etc.",
    highlights: [
      "Frontend development using React Native & Redux.",
      "User data and orders management using firebase.",
      "Managed complete frontend and database",
      "Integrated Firebase Firestore, Authentication , Storage, Deeplinks, Analytics, Cloud Functions, Messaging /Notification",
    ],
    technologies: ["React Native", "Redux", "Firebase", "Firestore", "Stripe"],
  },
  {
    title: "LMS",
    description:
      "It is a user friendly platform which allows security guards to learn and get training digitally. Plus the manager can track their team progress and learn side by side. Also, the admins can create course quite easily with drag and drop functionality tomove around course slides and sections.",
    highlights: [
      "Frontend development using React JS & material UI",
      "Integrated Figma designs and Rest APIs provided by client",
      "Led team and did client interaction",
    ],
    technologies: ["React Native", "Firebase", "Firestore", "Stripe"],
  },
];

export const neoyug = [
  {
    title: "Helping Hand Apps",
    description: "Assisted in developing multiple apps and static websites.",
    highlights: ["Worked on projects like Wiseapp, Flymate"],
    technologies: ["React Native", "Redux", "Firebase"],
  },
];
