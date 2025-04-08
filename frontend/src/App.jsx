import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar';
import PrivateRoute from './routes/PrivateRoute';
//Pages
import TestConnection from './pages/TestConnection';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Gigs from './pages/Gigs';
import Communities from './pages/Communities';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PostJob from './pages/PostJob';
import PostGig from './pages/PostGigs';
import NotFound from './pages/NotFound';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/test-connection" element={<TestConnection />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/post-job"
          element={
            <PrivateRoute>
              <PostJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/post-gig"
          element={
            <PrivateRoute>
              <PostGig />
            </PrivateRoute>
          }
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
