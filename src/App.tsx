import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Screens/HomePage/HomeScreen";
import { Offer } from "./Screens/Offer/OfferScreen";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
