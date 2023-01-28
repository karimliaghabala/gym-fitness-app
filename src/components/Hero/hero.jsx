import React from 'react';
import Header from '../Header/header';
import './hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hearth from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className='hero'>
            <div className="blur hero-blur">

            </div>
            <div className='left-h'>
                <Header />
                {/* the best ad  */}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            in here we  will  help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span>expert choach</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={955} start={755} delay='4' preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={20} delay='4' preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className='hero-buttons'>
                    <buttons className="btn">Get Starter</buttons>
                    <buttons className="btn">Learn more</buttons>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>

                <motion.div className='heart-rate'
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}>
                    <img src={hearth} alt='hearth' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero image */}
                <img src={hero_image} alt='hero_image' className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt='hero_image' className='hero-image-back' />
                {/* calories */}
                <motion.div className='calories'
                    initial={{ right: '38rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}>
                    <img src={calories} alt='calories' />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
