import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './SignInPage.css';
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

export default function SignInPage() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: '',
        mobile: '',
        dob: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('formData').get();
                const fetchedData = snapshot.docs.map(doc => doc.data());
                setFetchedData(fetchedData);
                console.log('Fetched Data:', fetchedData);
            } catch (error) {
                console.error('Error fetching data from Firebase:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSignIn = () => {
        try {
            const foundUser = fetchedData.find(user =>
                user.mobile === formValues.mobile &&
                user.name === formValues.name &&
                user.dob === formValues.dob
            );

            if (foundUser) {
                console.log('User found. Performing login...');
                const userGender = foundUser.gender;
                if (userGender === 'female') {
                    navigate('/demo');
                } else if (userGender === 'male') {
                    navigate('/femaleData');
                } else {
                    navigate('/mixData');
                }
            } else {
                console.log('User not found. Invalid credentials.');
                setErrorMessage('Invalid credentials. Please check your input.');
            }
        } catch (error) {
            console.error('Error performing login check:', error.message);
            setErrorMessage('Error performing login check. Please try again.');
        }
    }

    return (
        <div>
            <h1 id="newHeader-h1">Sign In Here</h1>
            <div className="newMainForm">
                <Fade>
                    <section>
                        <form className="newForm-registration">
                            <input type="text" name="name" placeholder="Enter your Name" onChange={handleInputChange}></input>
                            <input type="number" name="mobile" placeholder="Enter your Mobile Number" onChange={handleInputChange}></input>
                            <input type="date" name="dob" placeholder="Enter your Date of Birth" onChange={handleInputChange}></input>
                            <button type="button" onClick={handleSignIn} className="newBtn">Sign In</button>
                        </form>
                        <a href='/register'>Not Registered? SignUp Here...</a>
                    </section>
                </Fade>
                {errorMessage && <div className="newError-message">{errorMessage}</div>}
            </div>
        </div>
    );
}