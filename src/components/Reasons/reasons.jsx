import React from 'react';
import '../Reasons/reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import { motion } from 'framer-motion';

const reasons = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
                <img src={image4} alt="image4" />
            </div>
            <div className='right-r'>
                <span>some reasons</span>
                <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={transition}
                ><span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </motion.div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="tick" />
                        <motion.span
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                        >OVER 140+ EXPERT COACHS</motion.span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <motion.span
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                        >TRAIN SMARTER AND FASTER THAN BEFORE</motion.span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <motion.span
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                        > 1 FREE PROGRAM FOR NEW MEMBER</motion.span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <motion.span
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                        >RELIABLE PARTNERS</motion.span>
                    </div>
                </div>
                <span
                    style={{
                        color: "var(--gray)",
                        fontWeight: "normal"
                    }}>OUR PARTNERS
                </span>
                <div className='partners'>
                    <img src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" />
                </div>
            </div>
        </div>
    )
}

export default reasons
