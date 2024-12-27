import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HorizontalBotCatalog from "./pages/Home";
import NewLandingPage from "./pages/NewLandingPage";
import PricingPage from "./pages/Pricing";
import PlanDetails from "./pages/PlanDetails";
import AllBlogs from "./pages/AllBlogs";
import BlogDetail from "./pages/BlogDetail";
import Assistant from "./pages/Assistant";
import LoginPage from "./pages/Login";
import Assistants from "./components/Assistants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HorizontalBotCatalog />} />
        <Route path="/newlandingpage" element={<NewLandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/plan-details" element={<PlanDetails />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/assistants" element={<Assistants />} />
      </Routes>
    </Router>
  );
};

export default App;
