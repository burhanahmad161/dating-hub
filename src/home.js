// Home.js

import React from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
const Home = () => {
    return (
        <Fade>
            <div className="homepage">
                <header>
                    <h1>Welcome to Our Confession Site </h1>
                </header>
                <Fade>
                    <section className="success-stories">
                        <div className="testimonial">
                            <p>Welcome to our confession page, a space created for individuals to share their thoughts, feelings, and experiences anonymously. This platform is designed to provide a safe and supportive environment where you can unburden yourself without fear of judgment. Whether you want to share a secret, seek advice, or simply express yourself freely, we invite you to contribute to our community. Our commitment to confidentiality ensures that your identity remains protected, and our moderation process maintains a respectful and constructive atmosphere for all visitors. Thank you for being a part of our journey towards openness and understanding.</p>
                        </div>
                    </section>

                </Fade>
                <Fade>

                    <section className="search-matching">
                        <h2>Confidentiality</h2>
                        <p>Here, we value your trust and privacy. We understand that sharing your thoughts and experiences can be deeply personal, which is why we are committed to maintaining strict confidentiality.</p>
                        <p>Your confidentiality is of utmost importance to us. We have implemented the following measures to ensure a secure and private environment for your confessions:</p>
                        <div className="privacy-assurance">
                            <h3>Confidentiality Assurance</h3>
                            <p>We are committed to protecting the confidentiality of your confessions. Our assurance includes:</p>
                            <ul>
                                <li>Strict access controls to confessions, limiting access to authorized personnel only.</li>
                                <li>Encryption and secure storage of confession data to prevent unauthorized access.</li>
                                <li>Clear policies on confidentiality and consequences for any breaches.</li>
                            </ul>
                        </div>
                    </section>
                </Fade>
                <Fade>

                    <section className="subscription-info">
                        <h2>Confession Guidelines</h2>
                        <ul>
                            <li>The essence of a confession is honesty. Admit to your actions, feelings, or thoughts without exaggeration or deception</li>
                            <li>Acknowledge your role in the situation. Avoid blaming others or making excuses for your actions.</li>
                            <li>Provide details about what you are confessing to. Include relevant information such as when, where, and how the event occurred.</li>
                            <li>If your confession involves others, respect their privacy and avoid sharing identifying information without their consent.</li>
                            <li>Think about who will read your confession and how they might interpret it. Tailor your language and tone accordingly.</li>
                            <li>If seeking forgiveness is part of your confession, express your sincere desire to make amends and ask for forgiveness without expecting it to be granted automatically.</li>
                        </ul>
                    </section>
                </Fade>
            </div>
        </Fade>
    );
}

export default Home;
