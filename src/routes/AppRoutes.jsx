import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetail from "../pages/PropertyDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PROPERTIES LIST */}
        <Route path="/properties" element={<Properties />} />

        {/* PROPERTY DETAIL */}
        <Route path="/properties/:id" element={<PropertyDetail />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 - NOT FOUND */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;