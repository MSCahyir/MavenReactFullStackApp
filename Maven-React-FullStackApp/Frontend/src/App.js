import './App.css';
import Navbar from './Compenents/Navbar';
import Address from './Compenents/Address';
import GetAddress from './Compenents/GetAddress';
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/getaddress" element={<GetAddress/>} />
      </Routes>
    </div>
  </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}

export default App;
