import React from 'react'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import useMediaQuery from "../hooks/useMediaQuery"
import SkillsImage from "../assets/skills-image.png"

const Skills = () => {
    const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="pt-10 pb-24" id="skills"> 
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div
                className='md:w-1/3'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className='text-4xl text-semibold font-playfair mb-5'>
                    MY <span className='text-red'>SKILLS</span>
                </p>
                <LineGradient width='w-1/3' />
                <p className='mt-10 mb-7'>
                    I have acquired and am improving the necessary skills to become a front-end developer.
                </p>
            </motion.div>

            <div className='mt-16 md:mt-0'>
                {isAboveMedium ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:z-[-1]
                        before:border-2 before:border-blue before:w-full before:h-full"
                    >
                        <img alt="skills" className='z-10' src={SkillsImage} />
                    </div>
                ) : (
                    <img alt="skills" className='z-10' src={SkillsImage} />
                )}
            </div>
        </div>

        {/* SKILLS */}
        <div className='md:flex md:justify-between mt-16 gap-32 '>
            {/* EXPERIENCES */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">
                            Experience
                        </p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-5">
                    <p className='mb-3'>Proficient in HTML, CSS (Tailwind), and JavaScript (React).</p>
                    <p className='mb-3'>Experienced in state management, API integration.</p>
                    <p>Familiar with Version control (Git)</p>
                </div>
            </motion.div>

            {/* IMAGINATIVE */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">
                            Imaginative
                        </p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-5">
                    <p className='mb-3'>Experienced in Figma.</p>
                    <p className='mb-3'>Creating clean and user-friendly UI/UX designs.</p>
                    <p>Responsive web interfaces.</p>
                </div>
            </motion.div>

            {/* INNOVATIVE */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">
                            Innovative
                        </p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-5">
                    <p className='mb-3'>Always stay updated with new technologies to adapt to changes.</p>
                    <p>Have strong self-learning ability.</p>
                </div>
            </motion.div>


        </div>
    </section>

  )
}

export default Skills