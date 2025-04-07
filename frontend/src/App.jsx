import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar';

//Pages
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

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/post-gig" element={<PostGig />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
