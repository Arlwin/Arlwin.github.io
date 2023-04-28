import Image from 'next/image';

export default function About() {

  return (
    <div className="flex flex-col md:flex-row justify-center h-screen" id="about">

      {/* Logo */}
      <div className="flex basis-1/2 justify-center items-center">
        <span className='relative w-72 h-72 md:w-96 md:h-96'>
          <Image 
            src='/profile.png' 
            alt='me'
            fill
            className="rounded-full shadow-2xl"
          />
        </span>
      </div>

      {/* Info */}
      <div className="flex basis-1/2 flex-col md:justify-center items-center space-y-6">
        <h1 className="text-5xl font-bold text-center">
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