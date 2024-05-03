import React, { useState } from 'react';
import './feedback.css';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDarp_WHCa3_Byxv9cPOR1VF0Jx7DUKZoQ",
  
    authDomain: "confession-page-1cfbb.firebaseapp.com",
  
    projectId: "confession-page-1cfbb",
  
    storageBucket: "confession-page-1cfbb.appspot.com",
  
    messagingSenderId: "386523562950",
  
    appId: "1:386523562950:web:1ba3ba243f275ea47268c7",
  
    measurementId: "G-ZV4EE04L7B"
  
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        confession: '', // Changed from 'feedback' to 'confession'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection('confessionData').add({
                confession: formValues.confession,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Add timestamp field
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting confession:', error);
        }
    };
    

    return (
        <Fade>
            <div className="feedback-page">
                <header>
                    <h1>Leave Your Confession</h1>
                </header>
                {!submitted ? (
                    <Fade>
                        <section className="feedback-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="feedback"></label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    value={formValues.confession}
                                    onChange={(e) => setFormValues({ ...formValues, confession: e.target.value })}
                                    placeholder="Tell us what you think..."
                                ></textarea>
                                <button type="submit" className="submit-btn">
                                    Submit Confession
                                </button>
                                <p id='blah'>1 dfa button press kr k thora wait krain Pakistani hony ka saboot na dain... Shukria!</p>
                            </form>
                        </section>
                    </Fade>
                ) : (
                    <Fade>
                        <section className="feedback-submitted">
                            <h2>Your Confession has been submitted!</h2>
                        </section>
                    </Fade>
                )}
            </div>
        </Fade>
    );
};

export default Feedback;
