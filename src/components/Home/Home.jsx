import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './data';

const Home = () => {
  return (
    <section className="home__section">
        <div className="home__container">
            <div className="home__content">
                <Social />
                <div className="home__img"></div>
                <Data />
            </div>
        </div>
    </section>
  )
}

export default Home