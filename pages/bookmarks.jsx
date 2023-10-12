import Link from 'next/link'
import { useState } from 'react'
import Layouts from '../components/Layouts'
import data from '../util/csvjson.json'

import { motion } from 'framer-motion'

const Bookmarks = () => {
  const [filter, setFilter] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const ring = item => {
    let ringColor = ''
    if (item === 'Yazılar [TR]') {
      ringColor = 'bg-green-500'
    } else if (item === 'portfolio sites') {
      ringColor = 'bg-purple-500'
    } else if (item === 'inspiration') {
      ringColor = 'bg-blue-500'
    } else if (item === 'Document') {
      ringColor = 'bg-yellow-500'
    } else if (item === 'Tools') {
      ringColor = 'bg-red-500'
    }
    return ringColor
  }

  data.sort((a, b) => {
    if (a.created < b.created) {
      return -1
    }
    if (a.created > b.created) {
      return 1
    }
    return 0
  })

  const filtered = data.filter(item => {
    if (item.folder === filter || filter === 'All') {
      return item
    }
  })
  console.log('🔥', filtered)

  const date = new Date('2023-01-20T18:22:09.908Z')

  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ]
  const year = date.getFullYear()
  const month = months[date.getMonth()]

  console.log(month + ' ' + year)

  const buttons = [
    { name: 'All', color: 'bg-gray-500/70', value: 'All' },
    { name: 'Articles', color: 'bg-green-500/70', value: 'Yazılar [TR]' },
    { name: 'Portfolio', color: 'bg-purple-500/70', value: 'portfolio sites' },
    { name: 'Inspiration', color: 'bg-blue-500/70', value: 'inspiration' },
    { name: 'Document', color: 'bg-yellow-500/70', value: 'Document' },
    { name: 'Tools', color: 'bg-red-500/70', value: 'Tools' },
  ]

  return (
    <Layouts>
      <div className='flex justify-between items-center bg-white dark:bg-neutral-900 border-2 dark:border-neutral-800/40 border-neutral-800/0  px-2 py-2 rounded-full fixed sm:w-[500px] bottom-5 z-10  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {buttons.map((item, index) => {
          return (
            <motion.button
              layout
              key={index}
              className={` px-2 py-1 relative rounded-lg`}
              onClick={() => {
                setFilter(item.value), setSelectedIndex(index)
              }}
            >
              <span className='z-50 relative text-black dark:text-white'>
                {item.name}
              </span>
              {selectedIndex === index && (
                <motion.span
                  layoutId='outline'
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 30,
                    mass: 0.3,
                    ease: 'easeInOut',
                  }}
                  className={` ${
                    selectedIndex === 0
                      ? 'rounded-l-3xl rounded-br-md rounded-tr-md'
                      : selectedIndex === 5
                      ? 'rounded-r-3xl rounded-bl-md rounded-tl-md'
                      : 'rounded-lg'
                  } absolute -z-0 top-0 left-0 w-full h-full ${item.color}`}
                ></motion.span>
              )}
            </motion.button>
          )
        })}
      </div>
      <motion.div
        key={filtered.length}
        variants={{
          open: {
            transition: {
              staggerChildren: 0.03,
              delayChildren: 0.05,
              staggerDirection: 1,
            },
          },
          closed: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        initial='closed'
        animate='open'
      >
        {filtered.map((item, index) => {
          return (
            <motion.div
              variants={{
                open: {
                  y: 0,
                  x: 0,
                  filter: 'blur(0px)',
                  opacity: 1,
                },
                closed: {
                  y: 1,
                  filter: 'blur(5px)',
                  x: 5,
                  opacity: 0,
                },
              }}
              key={index}
              className='relative my-2 pl-2 border-b border-gray-200 dark:border-neutral-800/20'
            >
              <span
                className={`${ring(
                  item.folder,
                )} rounded-full h-2 w-2 absolute -left-3 bottom-2`}
              ></span>
              <Link
                href={item.url}
                target='_blank'
                className={`dark:text-neutral-200 hover:text-sky-500`}
              >
                {item.title.slice(0, 70)}
                {item.title.length > 70 ? '...' : ''}
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </Layouts>
  )
}

export default Bookmarks
