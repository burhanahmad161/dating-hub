import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './confessions.css';

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

const Confession = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('confessionData')
          .get();

        const fetchedData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Concatenate confessions with and without timestamp, placing those without at the bottom
        setData([...fetchedData]);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 id='mainHeading'>Confessions</h1>
      <ul>
        {data.map((item, index) => (
          <div id='main' key={item.id}>
            <div id="main1">
              <p id='namePadding'>{item.confession}</p>
              <p id='anonymous'>~Anonymous</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Confession;
