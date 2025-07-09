import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Fintech-event-driven-microservices",
    desc: "The architecture is designed for scalability, resilience, and modularity, making it ideal for modern financial applications.",
    img: "/static/projects/yei-learn.png",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: [ "Java" ,"docker" ,"kubernetes" ,"redis", "jenkins" ,"microservices" ,"spring-boot",  "postgresql", "ouath2"
    ],
  },
  {
    id: 1,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 2,
    title: "PingPongChat",
    desc: "PingPongChat is a real-time messaging app built for fun and learning. Designed to simulate fast-paced back-and-forth conversations (like a ping pong match), it leverages WebSockets for low-latency communication and offers a clean, modern chat interface.",
    img: "/static/projects/buildfaster.png",
    link: "https://buildfaster-io.vercel.app/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 3,
    title: "SyncingPopcorn",
    desc: "SyncingPopcorn is a fun, real-time movie sync app that lets you and your friends watch videos & chat in a realtime together no matter where you are!",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "WebRTC", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Food-O-Holic",
    desc: "A Food Ordering website based on Java Servlets and JSPs with MySQL Integration using JDBC. 🍴",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "EShoppers-Delight",
    desc: "A fully authenticated eCommerce Web App frontend confected in React, Backend APIs built upon Postman with Database Support of MongoDB 🛒🛍️",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "Note_It",
    desc: "React based web app that used to keep track of Daily Notes 📝",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/BraydenTW/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "My_Journal",
    desc: "A Realtime Daily Journal Web App with MongoDB Atlas Cloud-Native Document Database used to post Journals on Daily Appellate Reports, Verdicts, Judicial Profile and more ... 📰🖋",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 8,
    title: "Dunk-N-Dogs",
    desc: "A Web Page with Attractive Design for Dog Shop 🐶",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 9,
    title: "Ray.Ban--Smartphone_Shopiee",
    desc: "A Responsive E-Commerce Webpage with Visual of Smartphone Shop.",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 10,
    title: "Music-Bash",
    desc: "A Responsive WebPage For Advertising Music App 🎵🎧.",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
