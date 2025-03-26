import useMediaQuery from "../hooks/useMediaQuery";
import Profile from "../assets/avt.png";
import SocialMediaIcons from "../components/SocialMediaIcons.jsx";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMedium ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:z-[-1]
            before:border-2 before:border-blue before:rounded-full before:w-full before:h-full">
              <img 
                className="hover:filter hover:saturate-200 transition duration-500 hover:scale-105 z-10 w-full max-w-[400px] md:max-w-[600px]"
                alt="profile-image" 
                src={Profile} 
              />
          </div>
        ) : (
          <img 
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            alt="profile-image" 
            src={Profile}
          />
        )}
      </div>
      
      {/* MAIN TEXT */}
      <div className="basis-2/5 z-30 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Dung {" "}
            <span className="xs:relative before:absolute xs:text-deep-blue xs:font-semibold z-20 
              xs:before:content-brush before:-left-[30px] before:-top-[80px] before:z-[-1]"
            >
              Dinh
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Fresher Front end Developer skilled in building websites with React.
          </p>
        </motion.div>

        {/* CONTACT BUTONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >          
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue text-deep-blue py-3 px-6 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue w-full h-full hover:text-red transition duration-500 flex justify-center items-center px-10 font-playfair">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        > 
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;