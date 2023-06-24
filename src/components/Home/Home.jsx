import React,{useEffect} from 'react';
import './Home.css';
import Social from './Social';
import Data from './data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Home = () => {
  const homeImgAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
  if (inView) {
    homeImgAnimation.start({
      opacity:1,
      transition: { duration: 1,delay:2}
    });
  } else {
    homeImgAnimation.start({
      opacity:0
    });
  }
}, [inView, homeImgAnimation]);
  return (
    <section className="home__section" ref={ref}>
        <div className="home__container">
            <div className="home__content">
                <Social />
                <motion.div animate={homeImgAnimation} className="home__img" initial={{opacity:0}}></motion.div>
                <Data />
            </div>
        </div>
    </section>
  )
}

export default Home