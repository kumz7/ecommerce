import { BrowserRouter, Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
function App() {
  return (
    <>
    {/* <h1 onClick={()=>navigate("/")}>Home</h1> */}
    {/* <Link to="/">HOME</Link> */}
      <BrowserRouter>
          <Routes >
              <Route path="/" element={<Welcome/>}>
                {/* <Route path="welcome" element={<Welcome />} />
                <Route path="footer" element={<Footer />} /> */}
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
