import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" passHref>
            <div>Logo</div>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/" passHref>
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <div>Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;