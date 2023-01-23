import React from 'react';
import Header from '../Header/header';
import './hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hearth from '../../assets/heart.png';
import calories from '../../assets/calories.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h'>
                <Header />
                {/* the best ad  */}
                <div className='the-best-ad'>
                    <div></div>
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
                        <span>+140</span>
                        <span>expert choach</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
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

                <div className='heart-rate'>
                    <img src={hearth} alt='hearth' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                {/* hero image */}
                <img src={hero_image} alt='hero_image' className='hero-image' />
                <img src={hero_image_back} alt='hero_image' className='hero-image-back' />
                {/* calories */}
                <div className='calories'>
                    <img src={calories} alt='calories' />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
