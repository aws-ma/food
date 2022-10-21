import React from "react";
import "./about.css";
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
const About = () => {
    return (
        <div className='about-container'>
            <span className='about-text'>
                We highly esteem creating the best food on the planet, and we
                work resolutely to accomplish that consistently.
            </span>
            <div className='contact-us'>
                    <span>contact us</span>
                <div className='social-icons'>
                    <a
                        className='social-icon'
                        href='https://facebook.com'
                        target='_blank'
                        >
                        <FiFacebook/>
                    </a>
                    <a
                        className='social-icon'
                        href='https://instagram.com'
                        target='_blank'
                        >
                        <FiInstagram/>
                    </a>
                    <a
                        className='social-icon'
                        href='https://twitter.com'
                        target='_blank'
                        >
                        <FiTwitter/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
