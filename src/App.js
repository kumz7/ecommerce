import { BrowserRouter, Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Welcome from './welcome/welcome';
import Footer from './footer/footer';
function App() {
  let wishes = "Welcome to Login"
  return (
    <>
    {/* <h1 onClick={()=>navigate("/")}>Home</h1> */}
    {/* <Link to="/">HOME</Link> */}
    <h1>{wishes}</h1>
      <BrowserRouter>
          <Routes >
              <Route path="/" element={<Footer/>}>
                <Route path="welcome" element={<Welcome />} />
                <Route path="footer" element={<Footer />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
