import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HorizontalBotCatalog from "./pages/Home";
import NewLandingPage from "./pages/NewLandingPage";
import PricingPage from "./pages/Pricing";

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HorizontalBotCatalog/>} />
        <Route path="/newlandingpage" element={<NewLandingPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
