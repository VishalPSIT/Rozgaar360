import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Gigs", path: "/gigs" },
    { name: "Communities", path: "/communities" },
    { name: "Blog", path: "/blog" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-blue-600 dark:text-yellow-400">Rozgaar</span>360
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {links.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-blue-500 dark:hover:text-yellow-400 ${
                  isActive(link.path) ? 'border-b-2 border-blue-500 dark:border-yellow-400' : ''
                } pb-1`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button onClick={toggleTheme} className="ml-4">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/signin" className="ml-4 px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
            Sign In
          </Link>
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 space-y-4">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 text-sm hover:bg-blue-100 dark:hover:bg-gray-700 rounded ${
                isActive(link.path) ? 'bg-blue-200 dark:bg-gray-800' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="block px-4 py-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            to="/signin"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
