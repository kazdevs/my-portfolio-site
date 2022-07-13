import React from 'react'
import HeroImage from '../assets/okezi.JPG'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-1/2'>
          <h2 className='text-5xl sm:text-7xl font-bold text-white'>
            Hi, I'm A Frontend Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            My name is Okezi and I have over 6 years of experience building and
            designing software. I have worked with various technologies, such as
            javascript, React, Tailwind CSS and many more.
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#937577] cursor-pointer hover:scale-110 '
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-1/2 md:w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
