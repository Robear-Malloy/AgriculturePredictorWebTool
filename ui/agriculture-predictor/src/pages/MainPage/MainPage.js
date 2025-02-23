import { useState, useEffect } from 'react';
import './MainPage.css';
import { Tableau } from '../../components/Tableau/Tableau.js';

const MainPage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error('Error fetching the API:', error);
        setError('Failed to fetch data'); 
      });
  }, []);

  return (
    <div className="main-container">
      <h1>Hello World</h1>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>API Call: {message}</p>} 
      
      <div className="tableau-container">
        <Tableau />
      </div>
    </div>
  );
};

export default MainPage;
