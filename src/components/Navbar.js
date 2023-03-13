import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const router = useLocation();
  const links = [
    {
      text: 'Home',
      link: '/home',
    },
    {
      text: 'Detail',
      link: '/detail',
    },
  ];

  return (
    <nav className="navbar">
      <ul>
        {
          links.map((link) => (
            <li key={link.text} className={`nav-link ${router.pathname === link.link ? 'active' : 'inactive'}`}>
              <NavLink to={link.link} className="link">{link.text}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
