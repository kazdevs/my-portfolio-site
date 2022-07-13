import React from 'react'

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2 mx-auto'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
            About Me
          </p>
        </div>

        <p className='text-xl mt-5'>
          Hello! My name is Okezi and I enjoy creating things that live on the
          internet, especially the web. My interest in coding and web
          development started back in 2015. Fast-forward to today, and I’ve had
          the privilege of working with an advertising agency, a start-up, an
          ecommerce company, and also handled several freelance gigs. My main
          focus these days is building accessible, inclusive products and
          digital experiences for a variety of clients.
        </p>

        <br />

        <p className='text-xl'>
          I also have interest in sharing my coding and development knowledge
          and experience with the community at large. I really love to teach and
          assist beginners as much as possible. Here are a few technologies I’ve
          been working with recently: HTML, CSS, JavaScript, React js, Tailwind
          css, Bootstrap, Sass, Less, WordPress.
        </p>
        <br />
        <p className='text-xl'>
          When I'm not coding, you’ll find me playing chess online, playing
          soccer in the field or petting all the good dogs.
        </p>
      </div>
    </div>
  )
}

export default About
