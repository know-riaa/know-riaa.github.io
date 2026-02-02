import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import icon from './assets/icon.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen overflow-x-hidden text-white border'>
        <div className='text-5xl font-big leading-none pt-24 pl-8
        md:text-9xl'>
          RIA THAPA.<br></br>
          FULL STACK DEVELOPER.<br></br>
          <span className='text-red-500'>AI ORCHESTRATIONS.</span>
        </div>
        <br></br>
        <div className='flex gap-8 md:gap-16 font-big text-3xl 
        ml-8 md:text-6xl md:mt-8 w-fit'>
          <a href='https://www.linkedin.com/in/riathapa/' target='_blank' className=' 
        hover:text-red-500 hover:underline hover:underline-offset-4
        '>
          LINKEDiN</a>
          <a href='https://github.com/know-riaa' target='_blank' className='
        hover:text-red-500 hover:underline hover:underline-offset-4
        '>GITHUB</a>
        </div>

        <img src={icon}
        className='mt-12 mx-auto rounded-full aspect-square w-32
        md:absolute md:w-96 md:right-52 md: bottom-36'></img>
        

      </div>
    </>
  );
}

export default App
