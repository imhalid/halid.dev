import Link from 'next/link'
import LogoSVG from './LogoSVG'
import BlueSVG from './BlueSVG'

const Home = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center '>
        <LogoSVG />
        <div className='flex pl-3 flex-col'>
          <h1 className='text-3xl  font-bold'>
            Halid <BlueSVG />
          </h1>
          <h4 className='opacity-50'>Frontend Developer</h4>
        </div>
      </div>
      <article className='mt-10'>
        <p>
          Developer and designer making products that feel 'right' and faster.
          Focused on creating fluid and accessible interfaces. Interested in 3D
          modeling.
        </p>

        <p>
          Outside of programming, I enjoy doing photography and traveling. Some
          of my photos can be found on{' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://www.instagram.com/isuraka/'
          >
            Instagram.
          </Link>
        </p>
        <p>
          Find me on{' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://github.com/imhalid'
          >
            GitHub,
          </Link>{' '}
          <Link
            href='https://twitter.com/halidislm'
            className='cursor-ne-resize  font-bold'
          >
            Twitter
          </Link>
          and{' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://www.linkedin.com/in/halitislamicli/'
          >
            LinkedIn.
          </Link>
        </p>
        <p>
          I'm focused on Next.js right now. I love writing CSS and pure
          Javascript, dealing with designs. Looking for a job where I can
          improve myself. <br /> <br />
          Currently working on{' '}
          <Link className='font-bold' href='https://www.colorwayxpress.com/'>
            DoCode
          </Link>
          .
        </p>
      </article>
      <style jsx>{`
        p {
          margin-top: 20px;
          line-height: 1.8;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}

export default Home
