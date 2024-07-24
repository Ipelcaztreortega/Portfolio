import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;

