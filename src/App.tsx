import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Screens/HomePage/HomeScreen";
import { Offer } from "./Screens/Offer/OfferScreen";
import { NavBar } from "./Components/NavBar/NavBar";
import { FiltersContextProvider } from "./Context/filter-context";

function App() {
  return (
    <FiltersContextProvider>
      <div className="App">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/offer" element={<Offer />}></Route>
          </Routes>
        </Router>
      </div>
    </FiltersContextProvider>
  );
}

export default App;
