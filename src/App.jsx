
import './Styles/App.scss';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Contatti from './pages/Contatti';
import Blog from './pages/Blog';
import ChiSono from './pages/ChiSono';
const App=()=> {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/chi-sono" element={<ChiSono />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/contatti" element={<Contatti />} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
