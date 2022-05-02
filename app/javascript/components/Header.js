import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      text: 'Home',
      path: '/',
      id: 0,
    },
    {
      text: 'Greeting',
      path: '/greeting',
      id: 1,
    }
  ];
  return (
    <header>
      <a href="/">Greetings</a>

      <nav>
        <ul>
          {
            links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} className="bg-sky-500 p-2 rounded text-slate-50">{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header