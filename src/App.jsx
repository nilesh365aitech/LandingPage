import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HorizontalBotCatalog from "./pages/Home";
import NewLandingPage from "./pages/NewLandingPage";
import PricingPage from "./pages/Pricing";
import PlanDetails from "./pages/PlanDetails";
import AllBlogs from "./pages/AllBlogs";
import BlogDetail from "./pages/BlogDetail";

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
      </Routes>
    </Router>
  );
};

export default App;
