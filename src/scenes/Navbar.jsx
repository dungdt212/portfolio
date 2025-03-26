import React, { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Link = ( { page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            className={`${lowerCasePage === selectedPage ? "text-yellow" : ""}
                        hover:text-yellow transition duration-500`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToogled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navBackgroundStyle = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navBackgroundStyle} w-full z-40 fixed top-0 py-3 md:py-5`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfairy text-2xl font-bold'>DD</h4>
            
                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className='flex justify-between gap-16 font-opensans font-semibold'>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button 
                        className='rounded-full bg-red p-2'
                        onClick={() => setIsMenuToogled(!isMenuToggled)}
                    >
                        <Bars3Icon className='h-6 w-6'/>    
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <div className='h-full fixed right-0 bottom-0 bg-blue w-[250px] drop-shadow-xl'>
                        <div className='flex justify-end px-14 py-5'>
                            <button onClick={() => setIsMenuToogled(!isMenuToggled)}>
                                <XMarkIcon className='h-8 w-8'/>
                            </button>
                        </div>

                        {/* LINKS */}
                        <div className='flex flex-col gap-8 mt-5 ml-[33%] text-2xl text-deep-blue'>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>                    
                )}

            </div>
        </nav>
    )
}

export default Navbar