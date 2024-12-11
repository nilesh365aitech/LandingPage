import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HorizontalBotCatalog from "./pages/Home";
import NewLandingPage from "./pages/NewLandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HorizontalBotCatalog/>} />
        <Route path="/newlandingpage" element={<NewLandingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
