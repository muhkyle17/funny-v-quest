import Image from 'next/image'

export default function Confirmation() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-pink-200'>
      <div className='flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-20 py-16'>
        <Image src='/ralfdesign-cartoons-4587458_1920.png' alt='Panda' width={250} height={250} />
        <h1 className='text-6xl font-bold'>YAAAAAAAY!</h1>
        <img
          src='https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif'
          alt='Funny celebration'
          className='h-72 rounded-md'
        />
      </div>
    </main>
  )
}
