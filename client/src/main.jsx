import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/ping`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage('Failed to connect to server');
      });
  }, []);

  return <h1>{message}</h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
