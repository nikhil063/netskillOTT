import {Route, Routes} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Moviedetails from "./components/Moviedetails";
import Categories from "./components/Categories";
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Scrolltotop from "./components/Scrolltotop";

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <TheRestOfYourApplication />
//     </ChakraProvider>
//   )
// }


function App() {
  return (
  <>
  <ChakraProvider>
  <Router>
    <Navbar />
    <Scrolltotop />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    <Footer/>
    </Router>
    </ChakraProvider>
    </>
  );
}

export default App;
