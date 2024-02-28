import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './signUpPage.css';
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
export default function SignUpPage() {
    const navigate = useNavigate();
    const [selectedProfession, setSelectedProfession] = React.useState('');
    const [selectedgender, setSelectedGender] = React.useState('');
    const [formValues, setFormValues] = React.useState({
        name: '',
        mobile: '',
        dob: '',
        netWorth: '',
        address: '',
    });
    const [isFormValid, setFormValid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }
    const handlePageChange = () => {
        navigate('/alpha');
    }
    const handleProfessionChange = (e) => {
        setSelectedProfession(e.target.value);
    }
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    }
    React.useEffect(() => {
        const isValid = Object.values(formValues).every(value => value !== '') && selectedProfession !== '';
        setFormValid(isValid);
    }, [formValues, selectedProfession]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            try {
                // Calculate age based on the provided date of birth
                const dobDate = new Date(formValues.dob);
                const currentDate = new Date();
                const age = currentDate.getFullYear() - dobDate.getFullYear();
    
                if (age < 18) {
                    setErrorMessage('You are too young to use this site.');
                    return;
                }
                    // Validate mobile number length
                if (formValues.mobile.length < 11) {
                    setErrorMessage('Invalid mobile number. Please enter a valid number.');
                    return;
                }
                if (formValues.netWorth < 100000) {
                    setErrorMessage('Net Worth Insufficient... Jaa Greeb phly koi Nokri dhoond k aaa :)');
                    return;
                }
                if (selectedgender.toLowerCase() === 'gay') {
                    setErrorMessage('Khusry not Allowed...');
                    return;
                }  
                const existingUserQuery = await db.collection('formData')
                    .where('mobile', '==', formValues.mobile)
                    .where('name', '==', formValues.name)
                    .where('dob', '==', formValues.dob)
                    .get();
    
                if (existingUserQuery.empty) {
                    const formDataWithProfession = {
                        ...formValues,
                        profession: selectedProfession,
                        gender: selectedgender,
                    };
                    await db.collection('formData').add(formDataWithProfession);
                    setSuccessMessage('Form data sent to Firestore');
                    console.log('Form data sent to Firestore');
                    navigate('/alpha');
                } else {
                    setErrorMessage('User already exists!');
                }
            } catch (error) {
                setErrorMessage(`Error submitting form: ${error.message}`);
            }
        } else {
            setErrorMessage('Please fill in all the fields before submitting');
        }
    };
    
    return (
        <div>
            <h1 id="header-h1">Register Here!</h1>
            <div className="mainForm">
                <Fade>
                    <section>
                        <form className="form-registeration">
                            <input type="text" name="name" placeholder="Enter your Name" onChange={handleInputChange}></input>
                            <input type="number" name="mobile" placeholder="Enter your Mobile Number" onChange={handleInputChange}></input>
                            <input type="date" name="dob" placeholder="Enter your Date of Birth" onChange={handleInputChange}></input>
                            <div>
                                <label htmlFor="profession">Select Your Profession:</label>
                                <select id="profession" value={selectedProfession} onChange={handleProfessionChange}>
                                    <option className="prof-options" value="">Select...</option>
                                    <option value="Student">Student</option>
                                    <option value="Worker">Worker</option>
                                    <option value="Businessman">Businessman</option>
                                    <option value="Unemployed">Unemployed</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="gender">Select Your Gender:</label>
                                <select id="gender" value={selectedgender} onChange={handleGenderChange}>
                                    <option className="gender-options" value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="gay">Rather not say</option>
                                </select>
                            </div>
                            <input id="blah" type="number" name="netWorth" placeholder="Enter your Net Worth" onChange={handleInputChange}></input>
                            <input type="text" name="address" placeholder="Enter your Address" onChange={handleInputChange}></input>
                            <button onClick={handleSubmit} type="submit" className="btn" disabled={!isFormValid}>Submit</button>
                        </form>
                    </section>
                        <a href='' onClick={handlePageChange}>Already Registered? Login Here...</a>
                </Fade>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
}