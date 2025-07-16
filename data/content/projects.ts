import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [

  {
    id: 0,
    title: "StreamMyMeal-microservices",
    desc: "Microservices-based food delivery platform that supports live streaming from restaurants while meals are being cooked, building transparency and trust. It enables users to place orders, track them, and receive real-time updates via Kafka and email notifications. ",
    img: "/static/projects/streammymeal.png",
    link: "https://github.com/vivekdongare81/StreamMyMeal-microservices",
    github: "https://github.com/vivekdongare81/StreamMyMeal-microservices",
    tags: [ "Java","spring-boot", "kafka","Feign","kubernetes" ,"redis","microservices" ,  "postgresql", "ouath2","React", "TypeScript","Next.js" ]
  },
  {
    id: 1,
    title: "FamilyBank-fintech-microservice",
    desc: "Microservices architecture is designed for scalability, resilience, and modularity, making it ideal for modern financial applications.",
    img: "/static/projects/familybank.png",
    link: "https://github.com/vivekdongare81/FamilyBank-fintech-microservice",
    github: "https://github.com/vivekdongare81/FamilyBank-fintech-microservice",
    tags: [ "Java" ,"docker" ,"kubernetes" ,"redis","microservices" ,"spring-boot",  "postgresql", "ouath2","React", "TypeScript","Next.js"],
  },
  {
    id: 2,
    title: "PingPongChat",
    desc: "PingPongChat is a real-time messaging app built for fun and learning. Designed to simulate fast-paced back-and-forth conversations (like a ping pong match), it leverages WebSockets for low-latency communication and offers a clean, modern chat interface.",
    img: "/static/projects/pingpongchat1.png",
    link: "https://github.com/vivekdongare81/PingPongChat",
    github:"https://github.com/vivekdongare81/PingPongChat",
    tags:  [ "Java" ,"WebSocket","postgresql", "ouath2","React", "TypeScript","Next.js"],
  },
  {
    id: 3,
    title: "SyncingPopcorn",
    desc: "SyncingPopcorn is a fun, real-time movie sync app that lets you and your friends watch videos & chat in a realtime together no matter where you are!",
    img: "/static/projects/syncing-popcorn.png",
    github:"https://github.com/vivekdongare81/SyncingPopcorn",
    link: "https://github.com/vivekdongare81/SyncingPopcorn",
    tags: ["React", "WebRTC", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Food-O-Holic",
    desc: "A Food Ordering website based on Java Servlets and JSPs with MySQL Integration using JDBC. 🍴",
    img: "/static/projects/food-o-holic.png",
    github: "https://github.com/vivekdongare81/Food-O-Holic",
    tags: ["Servlets","JSPs","SQL", "Javascript", "HTML"],
  },
  {
    id: 5,
    title: "EShoppers-Delight",
    desc: "A fully authenticated eCommerce Web App frontend confected in React, Backend APIs built upon Postman with Database Support of MongoDB 🛒🛍️",
    img: "/static/projects/eshoppers1.png",
    link:"https://drive.google.com/file/d/1ikOOHEryPhl0MW5Ev-zHQU8W7xw35Yu6/view?usp=sharing",
    github: "https://github.com/vivekdongare81/EShoppers-Delight",
    tags: ["React", "SQL", "Node","Express.js"],
  },
  {
    id: 6,
    title: "Note_It",
    desc: "React based web app that used to keep track of Daily Notes 📝",
    img: "/static/projects/note-it.png",
    link:"https://my-note-it-app.netlify.app/",
    github: "https://github.com/vivekdongare81/Note_it",
    tags: ["Javascript", "NPM", "HTML", "CSS"]
  },
  {
    id: 7,
    title: "My_Journal",
    desc: "A Realtime Daily Journal Web App with MongoDB Atlas Cloud-Native Document Database used to post Journals on Daily Appellate Reports, Verdicts, Judicial Profile and more ... 📰🖋",
    img: "/static/projects/my_journal.png",
    link: "https://ancient-thicket-84139.herokuapp.com/",
    github: "https://github.com/vivekdongare81/My_Journal",
    tags: ["HTML", "TailwindCSS", "Javascript","MongoDB"],
  },
  {
    id: 8,
    title: "Dunk-N-Dogs",
    desc: "A Web Page with Attractive Design for Dog Shop 🐶",
    img: "/static/projects/dunk-n-dogs.png",
    link: "https://vivekdongare81.github.io/Dunk-N-Dogs",
    github: "https://github.com/vivekdongare81/Dunk-N-Dogs",
    tags: ["HTML", "TailwindCSS", "Javascript"],
  },
  {
    id: 9,
    title: "RayBan Smartphone Shopiee",
    desc: "A Responsive E-Commerce Webpage with Visual of Smartphone Shop.",
    img: "/static/projects/rayban-smartphone-shopiee.png",
    link: "https://vivekdongare81.github.io/Ray.Ban--Smartphone_Shopiee",
    github: "https://github.com/vivekdongare81/Ray.Ban--Smartphone_Shopiee",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 10,
    title: "Music-Bash",
    desc: "A Responsive WebPage For Advertising Music App 🎵🎧.",
    img: "/static/projects/music-bash.png",
    link: "https://vivekdongare81.github.io/Music-Bash",
    github: "https://github.com/vivekdongare81/Music-Bash",
    tags: ["HTML", "TailwindCSS", "Javascript"],
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
