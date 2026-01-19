import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-big pt-[14rem] pl-[2rem] text-[2rem] items-center lg:pt-24 lg:pl-20  lg:text-[12rem] lg:leading-[13rem]'>
        RIA THAPA.<br></br>
        FULL STACK ENGINEER.<br></br>
        <span className='text-brand-red'>AI ORCHESTRATIONS.</span>
      </div>
      <br></br>
      <a
        href='https://www.linkedin.com/in/riathapa/'
        target='_blank' 
        className='w-fit font-big text-[1.2rem] pl-[2rem] block lg:pt-12 lg:text-[4rem] lg:pl-20
       hover:text-brand-red hover:underline'>LINKED IN</a>
    </>
  );
}

export default App
