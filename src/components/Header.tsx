import '../styles/Header.css';

import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="header-logo">
        Jason
      </Link>
    </header>
  );
}
