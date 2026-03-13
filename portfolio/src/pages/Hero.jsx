import icon from '../assets/icon.png'
import heart from '../assets/heart.png'
import {Link} from 'react-router-dom'
import {Heart} from 'lucide-react'
import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'


function Hero(){
  const containerRef = useRef(null);
  const {scrollY} = useScroll();
  const nameY = useTransform(scrollY, [0,400], [0, -150]);
  const nameScale = useTransform(scrollY, [0,400], [1, 0.6]);
  const roleOpacity = useTransform(scrollY, [0,400], [0, 1]);
  const linksOpacity = useTransform(scrollY, [0,400], [0, 1]);
    return (
      <>
        <motion.div ref={containerRef} className='relative min-h-screen overflow-hidden text-white'>
          <motion.div 
            style={{ y:nameY, scale:nameScale }}
            className='flex items-center justify-center h-screen'>
              <div className='text-center'>
                <div className='text-5xl md:text-9xl font-big leading-none'>
                  <Link to='/about'
                    className='hover:animate-pulse hover:text-red-500'>
                    RIA THAPA.
                  </Link>
                </div>
              </div>
            </motion.div>       
        </motion.div>

        <motion.div style={{ opacity: roleOpacity}}
          className='fixed top-64 md:top-1/2 md:-translate-y-1/2 left-0 right-0 z-40 backdrop-blur-sm bg-black/50'>
            <div className='text-4xl md:text-9xl font-big leading-normal text-center'>
              <span className='text-white'>BACKEND ENGINEER</span>
              <br></br>
              <Heart src={heart} className='ml-4 inline h-12 md:w-32 text-red-500'></Heart>
              <span className='text-red-500'> DISTRIBUTED SYSTEMS</span>
            </div>
        </motion.div>

        <motion.div style={{ opacity:linksOpacity}}
        className='fixed bottom-60 left-1/2 -translate-x-1/2 md:bottom-54 flex gap-8 md:gap-28 font-big text-2xl md:text-6xl w-fit'>
          <a href='https://www.linkedin.com/in/riathapa/' target='_blank' className=' 
        hover:text-red-500 hover:underline hover:underline-offset-4
        ' rel='noopener noreferrer'>
          LINKEDiN</a>
          <a
            href='https://github.com/know-riaa'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-red-500 hover:underline hover:underline-offset-4'>
            GITHUB
          </a>
           <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=riathapa.cs@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-red-500 hover:underline hover:underline-offset-4'
          >
            EMAIL
          </a>
        </motion.div>

        <div className='h-screen bg-black'></div>
      </>
    )
}

export default Hero
        {/* HERO SECTION
      <div className='min-h-screen overflow-x-hidden text-white'>
        <div className='text-5xl font-big leading-tight>
         pt-24 pl-8
        md:text-9xl md:pt-24 md:pl-8'>
          <Link to='/about' className='hover:animate-pulse hover:text-red-500'>RIA THAPA.</Link><br></br>
          BACKEND ENGINEER.<br></br>
          <Heart src={heart} className='ml-4 inline h-16 text-red-500'></Heart>
          <span className='text-red-500'>  DISTRIBUTED SYSTEMS.</span>
        </div>
        <br></br>
        <div className='flex gap-8 md:gap-16 font-big text-3xl 
        ml-8 md:text-6xl md:mt-8 w-fit'>
          <a href='https://www.linkedin.com/in/riathapa/' target='_blank' className=' 
        hover:text-red-500 hover:underline hover:underline-offset-4
        '>
          LINKEDiN</a>
          <a href='https://github.com/know-riaa' target='_blank' 
          className='
        hover:text-red-500 hover:underline hover:underline-offset-4
        '>GITHUB</a>
          <a 
          href='https://mail.google.com/mail/?view=cm&fs=1&to=riathapa.cs@gmail.com' target='_blank'
          className='hover:text-red-500 hover:underline hover:underline-offset-4'>
            EMAIL
          </a>
        </div>
        
        <img src={icon}
        className='mt-12 mx-auto rounded-full aspect-square w-24
        md:absolute md:w-96 md:right-32 md:bottom-32'></img>
      </div>
      </> */}