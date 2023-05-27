
import { Fragment, useState } from 'react';
import './App.css';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import ContactCard from './components/Contact/ContactCard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';

function App() {

  const [cardIsShown,setCardIsShown] =useState(false);
  const showCradHandler=()=>{
    setCardIsShown(true);
  }

  const hideCardHandler=()=>{
    setCardIsShown(false);
  }
  return (
 <Fragment>
  {cardIsShown && <ContactCard onHideCard={hideCardHandler}/>}
  <Navbar />
  <Home />
  <About />
  <Project />
  <Skills />
  <Contact onShowCard={showCradHandler}/>
 </Fragment>
  );
}

export default App;
