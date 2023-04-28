import Image from 'next/image';

export default function About() {

  return (
    <div className="flex justify-center h-screen" id="about">

      {/* Logo */}
      <div className="flex basis-1/2 justify-center items-center">
        <Image 
          src='/profile.png' 
          alt='me'
          width='500'
          height='500'
          className='rounded-full shadow-2xl'
        />
      </div>

      {/* Info */}
      <div className="flex basis-1/2 flex-col justify-center items-center space-y-6">
        <h1 className="text-5xl font-bold">
          Hi &#128075;, 
          I&apos;m Arlwin!
        </h1>
        <p className='text-3xl text-center'>
          I&apos;m a Full Stack Developer and I like building applications and websites.

        </p>
      </div>

    </div>
  )
}