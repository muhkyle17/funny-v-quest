'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    const x = (Math.random() - 0.5) * 400
    const y = (Math.random() - 0.5) * 300
    setPosition({ x, y })
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-pink-200'>
      <div className='h-160 w-250 rounded-2xl p-24 bg-white'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <Image src='/graphicssc-bear-2316805_1280.png' alt='Panda' width={200} height={200} />
          <div className='flex flex-col gap-14'>
            <h1 className='text-4xl font-bold'>Cielo, will you be my valentine?</h1>
            <div className='flex flex-row gap-10 items-center justify-center'>
              <button className='bg-gray-300 text-2xl px-14 py-6 text-black rounded-3xl hover:bg-pink-300 hover:cursor-pointer'>
                Yes
              </button>
              <motion.button
                className='bg-gray-300 px-12 py-3 text-black rounded-3xl hover:bg-pink-300 hover:cursor-pointer'
                animate={{ x: position.x, y: position.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onMouseEnter={handleMouseEnter}>
                No
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
