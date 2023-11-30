import projects from '../util/projects.jsx'
import Image from 'next/image'
import classNames from '../util/classNames.jsx'
import Link from 'next/link'
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  return (
    <div className=''>
      <div className='h-[1px] my-10 bg-gradient-to-r from-transparent via-neutral-500 to-transparent w-full'></div>
      <h1 className='titles'>Projects</h1>
      <div className='grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className=''>
                <div className='relative saturate-50 hover:drop-shadow  transition-all hover:saturate-100  group '>
                  <Image
                    src={project.image}
                    width={500}
                    quality={100}
                    height={300}
                    loading='lazy'
                    className='rounded-xl transition-all  border'
                    style={{ border: '1px solid #3b3b3b' }}
                    alt={project.title}
                  />
                  <div className='absolute flex space-x-3 opacity-0  transition-opacity group-hover:opacity-100 bottom-4 left-2'>
                    <Link
                      className={classNames(
                        ' inline shadow bg-white rounded-2xl overflow-hidden p-3',
                        'hover:bg-neutral-200   transition-all',
                      )}
                      href={project.link}
                    >
                      <HiCode size={19} color='black' />
                    </Link>
                    <Link
                      className={classNames(
                        ' inline shadow bg-white rounded-2xl overflow-hidden p-3',
                        'hover:bg-neutral-100 transition-all',
                      )}
                      href={project.live}
                    >
                      <HiOutlineExternalLink size={19} color='black' />
                    </Link>
                  </div>
                </div>
                <div>
                  <Link href={project.live}>
                    <p className='text-lg hover:ml-1  transition-all font-bold mb-2'>
                      {project.name}
                    </p>
                  </Link>

                  <p className='text-neutral-600 dark:text-white/80'>
                    {project.description}
                  </p>
                  <div className='flex'>
                    {project.tags.map((tag, index) => {
                      return (
                        <p
                          className={classNames(
                            'mr-1 my-2 px-2 py-1 rounded text-xs font-bold',
                            'bg-blue-300/50 text-blue-900',
                            'dark:bg-blue-800/20 dark:text-blue-500',
                          )}
                          key={index}
                        >
                          {tag}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
