import Link from 'next/link'
import classNames from '../util/classNames'
import HomeSVG from './HomeSVG'
import ThemeChange from './themeChange'
const Nav = () => {
  const NavbarLinks = [
    {
      name: 'Bookmarks',
      href: '/bookmarks',
    },
  ]

  return (
    <div
      className={classNames(
        'py-1 px-3 flex items-center rounded-xl h-12 text-base ',
        'backdrop-blur-md bg-white/30  border-neutral-500/10 border',
        'dark:bg-neutral-800/30',
      )}
    >
      <Link href='/'>
        <HomeSVG />
      </Link>
      <ul className={classNames('inline-flex list-none font-bold ml-auto')}>
        {NavbarLinks.map((link, index) => (
          <li key={index} className='ml-3'>
            <Link className='headerHover' href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className='ml-6'>
          <ThemeChange />
        </li>
      </ul>
    </div>
  )
}

export default Nav
