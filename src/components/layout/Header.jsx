import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { navItems } from '../../data/siteContent';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
          JO &amp; CO. Events
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen((state) => !state)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="site-nav-wrap">
          <nav className={`site-nav ${isOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;