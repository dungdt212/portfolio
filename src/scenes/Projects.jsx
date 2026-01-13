import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Fitness from "../assets/fitness.jpeg";
import Booki from "../assets/booki.jpeg";
import Thesis1 from "../assets/thesis1.jpeg";
import LLS from "../assets/LLS.png";
import LLSAdmin from "../assets/LLSAdmin.png";
import KCX from "../assets/KCX.png";
import CNC from "../assets/CNC.png";
import FAMO from "../assets/FAMO.png";
import Thesis2 from "../assets/thesis2.jpeg";
import Bksoft from "../assets/bksoft.jpeg";
import Dbs from "../assets/dbs.jpeg";
import Calc from "../assets/calc.jpeg";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }, 
};

const Project = ({ title, description, technology, imgSrc, link }) => {
    const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue border-double border-4 border-sky-500`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variants={projectVariant}
            className="relative cursor-pointer"
        >
            <div className={overlayStyles}>
                <p className="font-playfair text-2xl">{title}</p>
                <p className="mt-10">{description}</p>
                <p className="mt-4">{technology}</p>
            </div>

            <img src={imgSrc} alt={projectTitle} />
        </motion.a>
    );
};


const listProject = [
    {
        title: "Lover's Lawn Services",
        description: "A promotional website for a lawn care service, user-friendly design.",
        technology: "Technology: WordPress, Elementor",
        imgSrc: LLS,
        link: "https://loverslawnservices.com/",
    },
    {
        title: "Admin dashboard - LLS",
        description: "An admin dashboard for managing lawn service operations, including booking management, staff coordination, and revenue tracking.",
        technology: "Technology: Tailwind, NextJS",
        imgSrc: LLSAdmin,
        link: "#projects",
    },
    {
        title: "Kim Cuong Xanh",
        description: "A real estate service website focused on property presentation and clear service promotion.",
        technology: "Technology: WordPress, Elementor",
        imgSrc: KCX,
        link: "https://h6.homenest.tech/",
    },
    {
        title: "CNC Marketplace",
        description: "A modern CNC marketplace platform enabling users to publish, browse, and trade CNC design templates.",
        technology: "Technology: WordPress, JavaScript",
        imgSrc: CNC,
        link: "https://thegioimaucnc.com/",
    },
    {
        title: "Famo Shipping",
        description: "A website showcasing international shipping and sea freight services.",
        technology: "Technology: WordPress, Elementor",
        imgSrc: FAMO,
        link: "https://famoshipping.com/",
    },
    {
        title: "Booki website",
        description: "“Build a demo website to manage/order book online.”",
        technology: "Technology: Bootstrap, jQuery, ReactJS",
        imgSrc: Booki,
        link: "#projects",
    },
    {
        title: "Undergraduate thesis",
        description: "“Building a sales management system for retail chains.”",
        technology: "Technology: Spring Boot, React, AntD",
        imgSrc: Thesis1,
        link: "#projects",
    },
    {
        title: "Databae Systems course ",
        description: "“Build a DS for supermarket chain's membership registration”",
        technology: "Technology: MySQL, Bootstrap, Node.JS",
        imgSrc: Dbs,
        link: "#projects",
    },
    {
        title: "Fitness website",
        description: "Landing page of fitness website.",
        technology: "Technology: TypeScript, Tailwind, React", 
        imgSrc: Fitness,
        link: "#projects",
    },
    {
        title: "BKSoft",
        description: "An assignment of Web programming course",
        technology: "Technology: Bootstrap, ReactJS",
        imgSrc:Bksoft,
        link: "#projects",
    },

];

const Projects = () => {
  return (
    <section className="py-20" id="projects">
        <div className="justify-center mt-20">
            {/* HEADINGS */}
            <motion.div
                className='md:w-2/5 mx-auto md:text-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className='text-4xl text-semibold font-playfair mb-5'>
                        <span className='text-red'>PRO</span>JECTS
                    </p>
                    <div className="flex md:justify-center mt-5">
                        <LineGradient width='w-1/3' />
                    </div>    
                </div>

                <p className="mt-10 mb-10">
                    Here are some related projects I have worked on (individual/group).
                    Hover over each image to see more details.
                </p>
                
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className='sm:grid grid-cols-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    <div className="flex justify-center items-center text-center font-playfair p-10 text-2xl bg-red 
                        font-semibold max-w-[400px] max-h-[400px]"
                    >
                        BEAUTIFUL USER INTERFACE
                    </div>
                    {listProject.map(p => (
                        <Project
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            technology={p.technology}
                            imgSrc={p.imgSrc}
                            link={p.link}
                        />
                    ))}
                    <div className="flex justify-center items-center text-center font-playfair p-10 text-2xl bg-blue
                        font-semibold max-w-[400px] max-h-[400px]"
                    >
                       SMOOTH USER EXPERIENCE
                    </div>
                    
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Projects