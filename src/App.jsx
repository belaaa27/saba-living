import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import OurStory from "./pages/OurStory";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collections" element={<Collections />} />
          <Route path="our-story" element={<OurStory />} />
          <Route
            path="contact"
            element={
              <Placeholder
                title="Contact & Studio Inquiries"
                subtitle="Direct contact options and showroom appointment forms will be implemented in a subsequent milestone."
              />
            }
          />
          {/* Catch-all 404 Route */}
          <Route
            path="*"
            element={
              <Placeholder
                title="Page Not Found"
                subtitle="The page you requested does not exist or has been relocated."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
