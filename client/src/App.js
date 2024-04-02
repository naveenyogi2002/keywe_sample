import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Welcome Go Key We Real Estate Project</h1>
      <ul>
        {properties.map(property => ( 
          <li key={property.id}>
            {property.name} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
