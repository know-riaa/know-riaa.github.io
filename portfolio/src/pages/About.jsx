import {Link} from 'react-router-dom'
import Hero from './Hero'
function About(){
    return (
    <div className='min-h-screen overflow-x-hidden text-white'>
        <div className="text-1xl font-big leading-1 pt-24 pl-10 pr-4
        md:text-6xl md:leading-relaxed">I'm a <span className="text-red-500 hover:underline">Full Stack Developer</span> based in Manhattan, New York; I'm currently focused on orchestrating <span className="text-red-500 hover:underline">AI workflows</span> with leading language models. Previously, I worked as a Backend Engineer at <a href="https://nownow.ng/" className="hover:text-red-500"><u>NowNow</u></a>, a Fintech company, where I designed and maintained <span className="text-red-500">payment</span> and billing systems. I was honored to be selected by the CTO to lead the development of our <br></br><span className="text-red-500">Buy Now, Pay Later (BNPL)</span> platform.</div> 
        <Link to='/' element={<Hero />} className="text-1xl font-big leading-1 pt-24 pl-10
        md:text-4xl md:leading-relaxed
        hover:animate-pulse hover:text-red-500">. . .</Link>
        
    </div>)
}
 
export default About