import './App.css';
import Payment from './Component/payment';
import Success from './Component/success';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Payment />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;