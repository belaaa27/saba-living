import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={
              <Placeholder
                title="Shop Collection"
                subtitle="The complete furniture and home décor catalog will be built in the next milestone of the 30-Website Challenge."
              />
            }
          />
          <Route
            path="collections"
            element={
              <Placeholder
                title="Curated Collections"
                subtitle="Curated interior lookbooks and room-by-room design stories are scheduled for upcoming challenge milestones."
              />
            }
          />
          <Route
            path="our-story"
            element={
              <Placeholder
                title="Our Story & Philosophy"
                subtitle="Learn about the design ethos and material selection behind Saba Living in an upcoming milestone."
              />
            }
          />
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
