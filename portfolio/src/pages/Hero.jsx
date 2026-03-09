import icon from '../assets/icon.png'
import heart from '../assets/heart.png'
import {Link} from 'react-router-dom'

function Hero(){
    return (
        <>
        {/*HERO SECTION*/}
      <div className='min-h-screen overflow-x-hidden text-white'>
        <div className='text-5xl font-big leading-normal
         pt-24 pl-8
        md:text-9xl md:pt-24 md:pl-8'>
          <Link to='/about' className='hover:animate-pulse hover:text-red-500'>RIA THAPA.</Link><br></br>
          BACKEND ENGINEER.<br></br>
          <span className='mx-auto'>
            <img src={heart} className='ml-4 inline h-16'></img>
          </span>
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
        className='mt-12 mx-auto rounded-full aspect-square w-30
        md:absolute md:w-96 md:right-32 md: bottom-32'></img>
      </div>
      </>
    )
}

export default Hero