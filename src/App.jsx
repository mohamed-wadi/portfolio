import React from 'react'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/layout/ErrorBoundary';

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <ErrorBoundary>
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
