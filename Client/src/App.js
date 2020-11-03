import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const [hello, setHello] = useState(null);

  useEffect(() => {
    axiosInstance.get('/posts')
        .then(res => console.log(res.data) )
        .catch(err => console.log(err))
  }, []);

  const asyncFunction = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => console.log(res))
  };

  asyncFunction();

  return (
    <div>
      {hello ? <div>{hello}</div> : null}
    </div>
  );
}

export default App;
