import { PROJECTS } from '@/constants';

import Image from 'next/image';
import { RxExternalLink } from 'react-icons/rx';

export default function Projects() {

  return (
    <section className="flex flex-col justify-center h-screen" id="projects">
      <h2 className="text-3xl text-center mb-20">
        Here are some of my projects
      </h2>

      {/* Mobile */}
      <div className="flex flex-col space-y-14 md:hidden">
      {
        PROJECTS.map((project, i) => (
          <div
            key={i} 
            className="grid grid-cols-3 gap-x-5"
          >
            {/* Cover */}
            <span className="relative group col-span-1 cursor-pointer">
              <Image 
                src={project.cover} 
                alt={project.title}
                width='200'
                height='200'
                className='rounded-lg group-hover:brightness-50'
              />
              <span
                className="hidden group-hover:block absolute top-2 right-2 text-white"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <RxExternalLink className="text-xl"/>
                </a>
              </span>
            </span>
  
            {/* Info */}
            <div className="col-span-2 flex flex-col space-y-1 pr-3 py-1">
              <h3 className="text-2xl font-semibold">{ project.title }</h3>
              <h4 className="text-xs italic">{ project.years }</h4>
              <p className="flex-grow text-md">{ project.description }</p>
            </div>
          </div>
        ))
        }
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-9 gap-x-5 gap-y-16">
        {
          PROJECTS.map((project, i) => (
            <div
              key={i} 
              className="col-span-3 grid grid-cols-3 gap-x-5"
            >
              {/* Cover */}
              <span className="relative group col-span-1 cursor-pointer">
                <Image 
                  src={project.cover} 
                  alt={project.title}
                  width='200'
                  height='200'
                  className='rounded-lg group-hover:brightness-50'
                />
                <span
                  className="hidden group-hover:block absolute top-2 right-2 text-white"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <RxExternalLink className="text-xl"/>
                  </a>
                </span>
              </span>
    
              {/* Info */}
              <div className="col-span-2 flex flex-col space-y-1 pr-3 py-1">
                <h3 className="text-2xl font-semibold">{ project.title }</h3>
                <h4 className="text-xs italic">{ project.years }</h4>
                <p className="flex-grow text-md">{ project.description }</p>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  ); 
}