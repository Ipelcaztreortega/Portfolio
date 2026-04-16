// import './App.css'
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Home } from './pages/Home';
// import Navbar from './components/Navbar';
// import Snowfall from 'react-snowfall';


// function App() {
//   return (
//     <BrowserRouter>
//       <Snowfall
//           color="white"
//           snowflakeCount={120}
//           style={{
//             position: 'fixed',
//             width: '100vw',
//             height: '100vh',
//             zIndex: 50,
//             pointerEvents: 'none', // important
//           }}
//         />
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//       </Routes>
//       {/* <Footer /> */}
//     </BrowserRouter>
//   )
// }

// export default App;

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
