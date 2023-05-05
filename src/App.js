import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { EventsPage } from "./pages/events";
import { EventItemPage } from "./pages/eventItemPage/";
import { EventFormPage } from "./pages/events-form";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";
import { ProfilePage } from "./pages/profile";
import { NotFoundPage } from "./pages/not-foud";
import { Layout } from "./component/layout";
import { ProfileEdit } from "./pages/profile-edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventItemPage />} />
          <Route path="/events/:id/edit" element={<EventFormPage />} />
          <Route path="/events/new" element={<EventFormPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id/edit" element={<ProfileEdit />} />

        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
