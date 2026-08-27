import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PetOwner from "./pages/PetOwner";
import PetProfile from "./pages/PetProfile";
import FeedingGuide from "./pages/FeedingGuide";
import Grooming from "./pages/Grooming";
import HealthTips from "./pages/HealthTips";
import Training from "./pages/Training";
import Products from "./pages/Products";
import Emergency from "./pages/Emergency";
import Veterinarian from "./pages/Veterinarian";
import Shelter from "./pages/Shelter";
import Adoption from "./pages/Adoption";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pet-owner" element={<PetOwner />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/feeding-guide" element={<FeedingGuide />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/health-tips" element={<HealthTips />} />
        <Route path="/training" element={<Training />} />
        <Route path="/products" element={<Products />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/veterinarian" element={<Veterinarian />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
