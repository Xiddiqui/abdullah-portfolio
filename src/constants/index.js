const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// const expCards = [
//   {
//     review: "Stepping in to lead our mobile app department was no small task, but you handled it with incredible skill, dedication, and vision. Your technical brilliance as a Senior Developer, combined with your natural ability to guide and mentor your team, has left a lasting mark on our company.",
//     imgPath: "/images/exp1.png",
//     logoPath: "/images/logo1.png",
//     letterPath: "/ExperienceLetters/1.pdf",
//     title: "Mobile App Team Lead",
//     date: "November 2025 - April 2026",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review: "Abdullah's contributions to Envio mobile and web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/images/exp2.png",
//     logoPath: "/images/logo2.png",
//     letterPath: "/ExperienceLetters/2.pdf",
//     title: "Senior Software Engineer",
//     date: "January 2024 - December 2025",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review: "We found him responsible, enthusiastic, and hardworking and a good team player during his working tenure. His contributions were invaluable in achieving our business goals.",
//     imgPath: "/images/exp3.png",
//     logoPath: "/images/logo3.png",
//     letterPath: "/ExperienceLetters/3.pdf",
//     title: "Software Engineer",
//     date: "March 2022 - January 2024",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];

const expCards = [
  {
    review: "Stepping in to lead our mobile app department was no small task, but you handled it with incredible skill, dedication, and vision. Your technical brilliance as a Senior Developer, combined with your natural ability to guide and mentor your team, has left a lasting mark on our company.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    letterPath: "/ExperienceLetters/1.pdf",
    expLetter: "yes",
    title: "Mobile Team Lead - Dynamic Leo",
    date: "12/2025 - Present",
    responsibilities: [
      "Leading a team of engineers across multiple projects built with React Native, React.js, Vue.js, and Flask.",
      "Mentoring junior developers, conducting code reviews, and ensuring best practices in coding standards and UI/UX.",
      "Driving sprint planning and task delegation within an agile environment to deliver high-quality releases on time.",
    ],
  },
  {
    review: "Abdullah's contributions to Envio mobile and web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    letterPath: "/ExperienceLetters/2.pdf",
    expLetter: "no",
    title: "Senior Software Engineer - Envio by Vista",
    date: "01/2025 - 12/2025",
    responsibilities: [
      "Developed frontend features in Vue.js and backend APIs in Flask for scalable Inventory Management and Logistics software.",
      "Integrated real-time tracking and order management systems into mobile applications using React and React Native.",
      "Coordinated with parallel Laravel backend teams for seamless API integration and cross-system interoperability.",
    ],
  },
  {
    review: "We found him responsible, enthusiastic, and hardworking and a good team player during his working tenure. His contributions were invaluable in achieving our business goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    letterPath: "/ExperienceLetters/3.pdf",
    expLetter: "yes",
    title: "Software Engineer - Graana",
    date: "03/2022 - 01/2025",
    responsibilities: [
      "Implemented LLM LangChain chatbots using LangGraph and FastAPI to automate CRM tasks through conversational input.",
      "Redesigned the Graana app UI, significantly reducing crash rates and optimizing performance by minimizing re-renders.",
      "Developed the Graana Rider app from scratch, implementing Firebase notifications and building backend APIs in PHP Laravel.",
    ],
  },
  // {
  //   review: "Collaborated with cross-functional teams to implement new features, improve code quality, and address user feedback, ensuring high levels of user satisfaction and retention.",
  //   imgPath: "/images/exp1.png",
  //   logoPath: "/images/logo1.png",
  //   letterPath: "",
  //   expLetter: "no",
  //   title: "Front End developer - ByteTech Solutions",
  //   date: "09/2020 - 03/2022",
  //   responsibilities: [
  //     "Contributed to the development of multiple front-end projects primarily using React Native, including fitness, food delivery, and social networking apps.",
  //     "Integrated Firebase into several projects for real-time database, authentication, and cloud storage capabilities.",
  //     "Implemented features such as user authentication, real-time messaging, push notifications, and data synchronization to provide seamless experiences.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Noorlingo",
    shortDesc: "Kids English Learning Platform",
    longDesc: "Noorlingo is an interactive mobile learning application designed to strengthen English literacy skills for second-language learners, with a special focus on Arabian children. The app combines gamification, storytelling, and interactive exercises to create an engaging and culturally relevant learning experience. By integrating reading comprehension, vocabulary development, grammar practice, fluency building, and critical thinking activities, Noorlingo offers a fun, immersive, and meaningful pathway to English literacy.",
    image: "/noorlingo/cover.png",
    media: [
      { type: "video", url: "/noorlingo/noorlingo.MP4" },
      { type: "image", url: "/noorlingo/cover.png" },
      { type: "image", url: "/noorlingo/1.PNG" },
      { type: "image", url: "/noorlingo/2.PNG" },
      { type: "image", url: "/noorlingo/3.PNG" },
    ],
    tags: ["React Native", "Cli", "Node", "Express"],
    type: "App",
    iosLink: "https://apps.apple.com/pk/app/noorlingo/id6754874153",
    androidLink: "https://play.google.com/store/apps/details?id=com.noorlingo", // added placeholder
  },
  {
    id: 2,
    title: "Graana.com",
    shortDesc: "Pakistan's biggest realstate market place",
    longDesc: "Graana.com is Pakistan's biggest real estate marketplace, offering a comprehensive solution for buying, selling, and renting properties. With an intuitive interface and advanced search capabilities, Graana.com provides a seamless experience for users looking to find their dream home or investment property.",
    image: "/graana/graanacover.png",
    media: [
      { type: "video", url: "/graana/graana.mp4" },
      { type: "image", url: "/graana/graanacover.png" },
      { type: "image", url: "/graana/1.PNG" },
      { type: "image", url: "/graana/2.PNG" },
      { type: "image", url: "/graana/3.PNG" },
    ],
    tags: ["React Native", "TypeScript", "AWS", "Node", "Express"],
    type: "App",
    iosLink: "https://apps.apple.com/pk/app/graana-real-estate-portal/id1438849353",
    androidLink: "https://play.google.com/store/apps/details?id=com.graanaapp",
  },
  {
    id: 3,
    title: "Envio Logistics App",
    shortDesc: "A startup showcase application.",
    longDesc: "An interactive directory displaying various startups, allowing users to discover, filter, and learn about different companies. It features a modern interface and dynamic routing.",
    image: "/envio/envioCover.png",
    media: [
      { type: "video", url: "/envio/envio.mp4" },
      { type: "image", url: "/envio/envioCover.png" },
      { type: "image", url: "/envio/1.PNG" },
      { type: "image", url: "/envio/2.PNG" },
      { type: "image", url: "/envio/3.PNG" },
    ],
    tags: ["React Native", "TypeScript"],
    type: "App",
    iosLink: "https://apps.apple.com/pk/app/envio-vista/id1658415527",
    androidLink: "https://play.google.com/store/search?q=envio+by+vista&c=apps",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
