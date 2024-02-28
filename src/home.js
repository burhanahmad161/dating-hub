// Home.js

import React from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
const Home = () => {
    return (
        <Fade>
            <div className="homepage">
                <header>
                    <h1>Welcome to Our Dating Platform</h1>
                </header>
                <Fade>
                    <section className="success-stories">
                        <h2>Success Stories</h2>
                        <div className="testimonial">
                            <p>"We met on this site and now happily married!"</p>
                            <p>- John & Jane Doe</p>
                        </div>
                    </section>

                </Fade>
                <Fade>

                    <section className="search-matching">
                        <h2>Find Your Match</h2>
                        <p>Use our advanced search to find compatible matches near you.</p>
                    </section>
                </Fade>
                <Fade>

                    <section className="safety-privacy">
                        <h2>Your Safety and Privacy Matter</h2>
                        <p>Your safety and privacy are our top priorities. We've implemented the following measures to ensure a secure and enjoyable experience:</p>

                        <div className="safety-tips">
                            <h3>Safety Tips</h3>
                            <ul>
                                <li>Meet in public places for the first few dates.</li>
                                <li>Inform a friend or family member about your plans.</li>
                                <li>Trust your instincts and report any suspicious behavior.</li>
                            </ul>
                        </div>

                        <div className="privacy-policy">
                            <h3>Privacy Policy</h3>
                            <p>We are committed to protecting your personal information. Our privacy policy outlines:</p>
                            <ul>
                                <li>What information we collect and how it is used.</li>
                                <li>How we secure and store your data.</li>
                                <li>Your rights and choices regarding your personal information.</li>
                            </ul>
                        </div>
                    </section>
                </Fade>
                <Fade>
                    <section className="dating-tips">
                        <h2>Dating Tips and Advice</h2>
                        <p>Make the most of your dating experience with these helpful tips and advice:</p>

                        <div className="profile-tips">
                            <h3>Profile Tips</h3>
                            <ul>
                                <li>Use clear and attractive profile pictures.</li>
                                <li>Write a genuine and interesting bio that reflects your personality.</li>
                                <li>Be honest about your interests and what you're looking for.</li>
                            </ul>
                        </div>

                        <div className="communication-tips">
                            <h3>Communication Tips</h3>
                            <ul>
                                <li>Start conversations with a friendly greeting.</li>
                                <li>Ask open-ended questions to get to know the other person better.</li>
                                <li>Be respectful and mindful of your tone in messages.</li>
                            </ul>
                        </div>

                        <div className="date-tips">
                            <h3>First Date Tips</h3>
                            <ul>
                                <li>Choose a comfortable and public location for the first date.</li>
                                <li>Be punctual and respectful of the other person's time.</li>
                                <li>Relax, be yourself, and enjoy the moment.</li>
                            </ul>
                        </div>
                    </section>

                </Fade>
                <Fade>

                    <section className="subscription-info">
                        <h2>Upgrade Your Experience</h2>
                        <p>Unlock premium features and enhance your dating experience by subscribing to one of our premium plans. Enjoy exclusive benefits:</p>

                        <div className="premium-features">
                            <h3>Premium Features</h3>
                            <ul>
                                <li>Unlimited messaging with other users.</li>
                                <li>Advanced search filters for better match results.</li>
                                <li>See who viewed your profile and expressed interest.</li>
                            </ul>
                        </div>

                        <div className="pricing-plans">
                            <h3>Pricing Plans</h3>
                            <p>Choose the plan that suits you best:</p>
                            <ul>
                                <li>Basic Plan - $9.99/month</li>
                                <li>Standard Plan - $19.99/month</li>
                                <li>Premium Plan - $29.99/month</li>
                            </ul>
                        </div>
                    </section>
                </Fade>
            </div>
        </Fade>
    );
}

export default Home;
