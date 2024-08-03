import './App.css'
import Catalog from './components/pages/catalog';
import Home from './components/pages/home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  )
}

export default App
