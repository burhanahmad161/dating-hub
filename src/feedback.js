import React, { useState } from 'react';
import './feedback.css';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHfOJ3wlOOjU5SPeuOBA9gMELYqkZJFEM",
    authDomain: "dating-data-6be47.firebaseapp.com",
    projectId: "dating-data-6be47",
    storageBucket: "dating-data-6be47.appspot.com",
    messagingSenderId: "929115718404",
    appId: "1:929115718404:web:1a168f2f1db2287a538651",
    measurementId: "G-STW671WYQV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',  // Add other fields as needed
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection('feedbackData').add({
                feedback: formValues.feedback,
                // Add other fields as needed
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <Fade>
            <div className="feedback-page">
                <header>
                    <h1>We Value Your Feedback</h1>
                </header>
                {!submitted ? (
                    <Fade>
                        <section className="feedback-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="feedback">Your Feedback:</label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    value={formValues.feedback}
                                    onChange={(e) => setFormValues({ ...formValues, feedback: e.target.value })}
                                    placeholder="Tell us what you think..."
                                ></textarea>
                                <button type="submit" className="submit-btn">
                                    Submit Feedback
                                </button>
                            </form>
                        </section>
                    </Fade>
                ) : (
                    <Fade>
                        <section className="feedback-submitted">
                            <h2>Thank you for your feedback!</h2>
                            <p>We appreciate your input and will use it to improve our platform.</p>
                        </section>
                    </Fade>
                )}
            </div>
        </Fade>
    );
};

export default Feedback;
