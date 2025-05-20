import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes'

function App() {
  return (
    <Router>
      <Routes>
        {AuthRoutes}
      </Routes>
    </Router>
  );
}

export default App;