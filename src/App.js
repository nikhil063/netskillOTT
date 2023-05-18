import {Route, Routes} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Moviedetails from "./components/Moviedetails";
import Categories from "./components/Categories";



function App() {
  return (
  <>
  <Router>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
