import React from 'react';
import './about.css';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
      </header>
      <Fade>
        <section className="mission-vision">
          <h2>Our Mission</h2>
          <p>At Our Dating Platform, our mission is to create a safe and inclusive space for individuals to connect, build meaningful relationships, and find love. We believe in the power of human connection and are dedicated to helping you discover your perfect match.</p>

          <h2>Our Vision</h2>
          <p>We envision a world where everyone has the opportunity to experience the joy of companionship and the fulfillment of a loving relationship. Our platform strives to make the journey of finding love enjoyable, secure, and tailored to your unique preferences.</p>
        </section>
      </Fade>
      <Fade>
        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <img src="avatar.png" alt="Team Member 1" />
            <p><strong>Sasta Insaan</strong><br />Founder & CEO</p>
          </div>
          {/* Add more team members as needed */}
        </section>
      </Fade>
      <Fade>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions, feedback, or concerns, feel free to reach out to us. We value your input and are here to assist you on your journey to finding love.</p>
          <p>Email: sastainsan6@gmail.com</p>
        </section>

      </Fade>
    </div>
  );
}

export default About;
