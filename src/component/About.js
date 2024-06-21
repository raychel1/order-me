import React from 'react';
import './App.css';
//import history from '../public/images/history.png';


const About = () => {
    return(
        <div className='abt-container'>
            <section className='his-container'>
                <div className='his-text'>
                    <h2>OUR HISTORY</h2>
                    <p>33D Audiomix is a sound engineering company that provides quality live mixing services and the best of instruments to bring out the best quality Music and audio for all your events and programs</p>
                </div>
            </section>

            <section className='contact-container'><h2>Get In Touch</h2>
            <p>Located in Mallam/maCarthy Hill, Kasoa Millennium city, our service are available throughout accra, Kumasi, Western, Central and Eastern region. We provide good service at an affordable price. we sell sound engineering products of any kind. We also rent sound engineering instruments of all kinds. Our business days are from Mondays to Saturdays 7:30am to 6:30pm. the instruments are rentedforall kinds of events.</p>
            </section>

            <section className='leadership-container'>
                <h2>Leadership</h2>
                <div className='leaders'>
                    <div className='leaders'></div>
                </div>
            </section>
        </div>
    );
}
export default About;