import { useState } from 'react';
import { Button } from './components';

function App() {
  const [data, setData] = useState(null);
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.table(data.address);
          setData(data.address);
        })
        .catch((err) => {
          console.log('Error', err);
        });
    });
    
  };

  return (
    <div>
      <Button onClick={handleClick}>Show Location</Button>
      {data && (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}><b>{key}: </b>{`${data[key]}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
