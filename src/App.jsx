import React from 'react'
import Header from './components/common/Header'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Details from './sections/Details'
import Gallery from './sections/Gallery'
import Registry from './sections/Registry'
import RSVP from './sections/RSVP'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div className='relative font-manrope'>
      <Header />
      <main>
        <Hero  id='home'/>
        <Story  id='story'/>
        <Gallery id='gallery' />
        <Registry id='registry' />
        <RSVP  id='rsvp'/>
      </main>
      <Footer />
    </div>
  )
}

export default App
