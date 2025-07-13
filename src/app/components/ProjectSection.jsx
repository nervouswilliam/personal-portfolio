"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
      id: 1,
      title: "Stocking",
      description: "The main idea behind this project is to help small businesses in Indonesia to keep track of their stock in order to increase their competitiveness and prevent their products that have an expired date to be wasted. This application will help small businesses reduce the amount of wasted stocks which could be turned into profit.",
      image: "/images/projects/Stocking.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/nervouswilliam/SE_AOL",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Vorskin",
      description: "This project is an online e commerce website specifically to help sell beauty products online. The language used is HTML and CSS for the front end and a little bit of Java Script for the backend.",
      image: "/images/projects/Vorskin.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/nervouswilliam/Vorskin",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Merci",
      description: "This is a website that sells used cars online. The language used is HTML and CSS for the front end and use a little bit of JavaScript for registration and selling forms.",
      image: "/images/projects/Merci.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/nervouswilliam/Merci",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Dev4You",
      description: "Web application to connect volunteer developers and nonprofit organizations.Features include chatting (websockets), kanban board, and a bunch of CRUD.",
      image: "/images/projects/Dev4You.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/nervouswilliam/skripsi",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "CesTwoSkin",
      description: "Online Marketplace for Counter Strike 2 Skins",
      image: "/images/projects/CesTwoSkin.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/nervouswilliam/cestwo_skin",
      previewUrl: "/",
    },
  ];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
}

export default ProjectSection