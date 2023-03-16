import {
  antdesign,
  ahook,
  mysql,
  umi,
  unity,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,

  threejs,
  lowcode_platform,
  smart_foshan,
  attribution_decision,
  terminal_page,
  xiaoban,
  nestjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "antdesign",
    icon: antdesign,
  },
  {
    name: "ahook",
    icon: ahook,
  },
  {
    name: "umi",
    icon: umi,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nestjs",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Unity3D",
    icon: unity,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web And Unity Developer",
    company_name: "Lnued",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "Developing data screen applications with Unity 3D",
      "Developing and maintaining web applications using React.js or Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TianMa Anti-counterfeiting",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2020 - August 2021",
    points: [
      "Developing and maintaining Development and maintenance of the company's anti-counterfeiting system using Vue.js and other related technologies.",
      "Build a low-code platform that generates marketing pages from scratch.",
      "Encapsulates commonly used tool functions and foundational components.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "XiaoBan",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2019 - May 2020",
    points: [
      "Developing and maintaining WeChat nini program and the background management system.",
      "Development and maintenance of the company's website.",
      "Use Nodejs to implement the backend interface.",
      "Optimize the product interface to provide a better experience for users.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Low-Code Platform",
    description:
      "Low-Code platform that enable corporate business personnel to quickly generate marketing pages by dragging and dropping.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antdesign",
        color: "green-text-gradient",
      },
      {
        name: "umi",
        color: "pink-text-gradient",
      },
    ],
    image: lowcode_platform,
    source_code_link: "https://gitee.com/yangjunjie0806/low-code-platform",
  },
  {
    name: "Attribution Decision",
    description:
      "A decision-making platform for banking and financial business, which can conduct big data analysis based on the data entered by users to help make decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antdesign",
        color: "green-text-gradient",
      },
      {
        name: "icejs",
        color: "pink-text-gradient",
      },
    ],
    image: attribution_decision,
    source_code_link: "https://gitee.com/yangjunjie0806/low-code-platform",
  },
  {
    name: "Smart Foshan",
    description:
      "A large visualization for data management developed using Unity3D.",
    tags: [
      {
        name: "Unity 3D",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: smart_foshan,
    source_code_link: "",
  },
  {
    name: "Smart Management System",
    description:
      "A 3D smart point management system that can help customers visualize data intuitively and quickly.",
    tags: [
      {
        name: "Unity 3D",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: smart_foshan,
    source_code_link: "",
  },
  {
    name: "Xiao Ban",
    description:
      "A wechat mini program for truck drivers, which an automatic weighing applet , drivers can scan the code to achieve self-service truck weighing.",
    tags: [
      {
        name: "Mini Program",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: xiaoban,
    source_code_link: "https://github.com/Ectimi/xiaoban",
  },
  {
    name: "Terminal Page(Personal Project)",
    description:
      "A command-line style browser home page that allows you to search and manage bookmarks by command.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Recoil",
        color: "pink-text-gradient",
      },
    ],
    image: terminal_page,
    source_code_link: "https://github.com/Ectimi/JTerminal",
  },

];

export { services, technologies, experiences, testimonials, projects };
