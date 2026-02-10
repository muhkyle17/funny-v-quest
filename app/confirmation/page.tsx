'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Confirmation() {
  const text = 'YAAAAAAAY!'

  return (
    <main className='flex min-h-screen items-center justify-center bg-pink-200'>
      <div className='flex min-w-250 flex-col items-center justify-center gap-8 rounded-2xl bg-white px-20 py-16'>
        <Image src='/ralfdesign-cartoons-4587458_1920.png' alt='Panda' width={250} height={250} />
        <h1 className='text-6xl font-bold'>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1,
            }}
            className='inline-block overflow-hidden whitespace-nowrap'>
            {text}
          </motion.span>
        </h1>
        <img
          src='https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif'
          alt='Funny celebration'
          className='h-72 rounded-md'
        />
        <p className='text-[6px]'>
          Now let&apos;s plan where we&apos;re gonna eat HEHE HAHAHHAHAHAHHAHAHAHHA
        </p>
      </div>
    </main>
  )
}
