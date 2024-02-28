import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './data.css';
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
const FemaleData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('formData')
                    .where('gender', '!=', 'male')
                    .get();

                const fetchedData = snapshot.docs.map(doc => doc.data());
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data from Firebase:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 id='mainHeading'>People Available for Date</h1>
            <ul>
                {data.map((item, index) => (
                    <div id='main' key={index}>
                        <div id="main1">
                            <img id='picPadding' src="avatar.png" width={200} alt={`Avatar of ${item.name}`} />
                            <h4 id='namePadding'>Name: {item.name}</h4>
                            <ul id='ulPadding'>
                                <li>Phone Number: {item.mobile}</li>
                                <li>DOB: {item.dob}</li>
                                <li>Address: {item.address}</li>
                                <li>Net Worth: {item.netWorth}</li>
                                <li>Profession: {item.profession}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default FemaleData;
