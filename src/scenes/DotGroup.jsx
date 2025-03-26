import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedPageStyles = `relative bg-yellow before:absolute
        before:rounded-full before:w-6 before:h-6  
        before:border-2 before:border-yellow 
        before:left-[-50%] before:top-[-50%]`;
  return (
    <div className='flex flex-col gap-6 fixed top-[50%] right-7'>
        <AnchorLink
            href="#home"
            className={`${selectedPage === "home" ? selectedPageStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("home")}
        />
        <AnchorLink
            href="#skills"
            className={`${selectedPage === "skills" ? selectedPageStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("skills")}
        />
        <AnchorLink
            href="#projects"
            className={`${selectedPage === "projects" ? selectedPageStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("projects")}
        />
        <AnchorLink
            href="#contact"
            className={`${selectedPage === "contact" ? selectedPageStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("contact")}
        />
    </div>
    );
};

export default DotGroup;