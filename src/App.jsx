import React, { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy loading components
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

// Loading component
const Loading = () => (
  <div className="loading-container">
    <div className="spinner"></div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Resume />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App