import React from 'react'
import cardanothumbnail from '../assets/portfolio/cardano-thumbnail.png'
import princeCollections from '../assets/portfolio/prince-collections-thumbnail-1.png'
import colorGenerator from '../assets/portfolio/color-generator.png'
import banner from '../assets/portfolio/banner.png'
import tictactoe from '../assets/portfolio/tictactoe.png'
import grocerybud from '../assets/portfolio/grocery-bud.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      projectName: 'Cardano-website-clone',
      src: cardanothumbnail,
      demoLink: 'https://cardano-website-clone.netlify.app/',
      codeLink: 'https://github.com/kazdevs/cardano-site',
    },
    {
      id: 2,
      projectName: 'restaurant-website',
      src: banner,
      demoLink: 'https://shaif-s-cuisine.netlify.app/',
      codeLink: 'https://github.com/kazdevs/Shaif-s-cuisine-website',
    },
    {
      id: 3,
      projectName: 'Color-generator-api-app',
      src: colorGenerator,
      demoLink: 'https://color-generator-reactjs-webapp.netlify.app/',
      codeLink: 'https://github.com/kazdevs/color-generator-react-app',
    },
    {
      id: 4,
      projectName: 'Tic-tac-toe game',
      src: tictactoe,
      demoLink: '',
      codeLink: '',
    },
    {
      id: 5,
      projectName: 'Male-boutique-website',
      src: princeCollections,
      demoLink: 'https://princecollections1.com/',
      codeLink: 'https://princecollections1.com/',
    },
    {
      id: 6,
      projectName: 'Grocery-bud-react-js',
      src: grocerybud,
      demoLink: '',
      codeLink: '',
    },
  ]

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 '>
        <div className='pb-2 mx-auto text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, projectName, src, demoLink, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <div className='pl-2 py-2 text-2xl capitalize'>{projectName}</div>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105 object-cover h-48 w-96'
              />
              <div className='flex items-center justify-center'>
                <a
                  href={demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-auto px-3 py-2 m-5 duration-200 hover:scale-105 hover:border-b-2 no-underline text-center'
                >
                  View
                </a>

                <a
                  href={codeLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-auto px-3 py-2 m-5 duration-200 text-center hover:scale-105 hover:border-b-2 no-underline'
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
