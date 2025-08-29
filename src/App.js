import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    //백엔드 api 호출
    axios
      .get('http://localhost:8080/hello')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('There was an error', error);
        setMessage('Error occured from backend');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <p>Hello, GitHub Actions! This is a simple React app.</p>
      </header>
    </div>
  );
}

export default App;
