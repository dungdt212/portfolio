import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-48 pt-3 pb-10 bg-red'>
        <div className='w-5/6 mx-auto'>
            <div className='md:flex md:justify-start'>
                <SocialMediaIcons />
            </div>
            
            <div className='md:flex justify-center md:justify-between text-center'>
                <p className='font-playfair font-semibold text-2xl text-yellow'>
                    DUNG DINH
                </p>
                <p className="font-playfair text-md text-yellow">
                    ©2025. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer