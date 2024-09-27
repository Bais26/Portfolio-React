import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './router';
import Home from './pages/home/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;