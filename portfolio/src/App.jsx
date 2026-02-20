import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App