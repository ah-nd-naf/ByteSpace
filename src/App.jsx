import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';
import CourseDetails from './pages/CourseDetails';
import CreatorProfile from './pages/CreatorProfile';
import NotFound from './pages/NotFound';
import DevTokens from './pages/DevTokens';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* 
            1. Standalone Authentication Pages:
            Confirmed from Figma frames 2 & 3 (1440x1024):
            Render without main Navbar & Footer.
          */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* 
            2. Dev Tokens Route (Design System Viewer)
          */}
          <Route path="/dev-tokens" element={<DevTokens />} />

          {/* 
            3. Main Application Routes (With RootLayout: Navbar + Content + Footer)
            Matches Figma frames 1, 4, 5, 6, 7, 8, 9
          */}
          <Route element={<RootLayout />}>
            {/* Home Page (Frame 1) */}
            <Route path="/" element={<Home />} />

            {/* Search & Courses Page (Frame 4) */}
            <Route path="/search" element={<Search />} />
            <Route path="/courses" element={<Search />} />

            {/* Course Details (Frames 5, 6, 7: Overview, Lessons, Reviews) */}
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/courses/:id/lessons" element={<CourseDetails />} />
            <Route path="/courses/:id/reviews" element={<CourseDetails />} />

            {/* Creator Profile (Frame 8) */}
            <Route path="/creator/:id" element={<CreatorProfile />} />
            <Route path="/creators" element={<CreatorProfile />} />
            <Route path="/creators/:id" element={<CreatorProfile />} />

            {/* 404 Not Found Page Shell (Frame 9: 1440x1485, includes Navbar & Footer) */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
