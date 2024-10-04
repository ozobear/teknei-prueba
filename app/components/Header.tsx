"use client";

import Link from 'next/link';
import { USERNAME } from '../utils/constants';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/users">
              Usuarios
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => console.log('Salir')}>
              Salir
            </a>
          </li>
        </ul>
      </nav>
      <h1>{USERNAME}</h1>
    </header>
  );
};

export default Header;