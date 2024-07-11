import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Course from "./pages/Course";
import RP from "./pages/RP";
import LP from "./pages/LP";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PlacementPage from "./pages/PlacementPage";
import Class from "./pages/Class";
import Faculty from "./pages/Faculty";
import Discussion from "./pages/Discussion";
import PracticeDashboard from "./pages/PracticeDashboard";
import Report from "./pages/Report";
import Practice from "./pages/Practice";
import MyAccount from "./pages/MyAccount";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/rp":
        title = "";
        metaDescription = "";
        break;
      case "/lp":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/placement-page":
        title = "";
        metaDescription = "";
        break;
      case "/class":
        title = "";
        metaDescription = "";
        break;
      case "/faculty":
        title = "";
        metaDescription = "";
        break;
      case "/discussion":
        title = "";
        metaDescription = "";
        break;
      case "/practice-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/report":
        title = "";
        metaDescription = "";
        break;
      case "/practice":
        title = "";
        metaDescription = "";
        break;
      case "/my-account":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Course />} />
      <Route path="/rp" element={<RP />} />
      <Route path="/lp" element={<LP />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/placement-page" element={<PlacementPage />} />
      <Route path="/class" element={<Class />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="/practice-dashboard" element={<PracticeDashboard />} />
      <Route path="/report" element={<Report />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/my-account" element={<MyAccount />} />
    </Routes>
  );
}
export default App;
