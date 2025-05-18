import { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('http://localhost:6000/api/health')
      .then(res => res.json())
      .then(data => setHealth(data.status))
      .catch(() => setHealth('Backend not reachable'));
  }, []);

  return (
    <div>
      <h1>Hello Hello</h1>
      <p>Backend status: {health}</p>
    </div>
  );
}

export default App;