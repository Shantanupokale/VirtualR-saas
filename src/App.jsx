import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSecton from './components/FeatureSecton'
import WorkflowSection from './components/WorkflowSection'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSecton />
        <WorkflowSection />
        <Price />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  )
}

export default App
