import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pt-24 pl-20 font-big text-[13rem] leading-[13rem]'>
        RIA THAPA.<br></br>
        FULL STACK ENGINEER.<br></br>
        <span className='text-brand-red'>AI ORCHESTRATIONS.</span>
      </div>
      <br></br>
      <a
        href='https://www.linkedin.com/in/riathapa/'
        target='_blank' 
        className='block pt-12 font-big text-[4rem] pl-20
       hover:text-brand-red hover:underline'>LINKED IN</a>
    </>
  );
}

export default App
