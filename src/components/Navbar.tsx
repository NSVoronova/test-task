import { useState } from 'react';
import logo from '../assets/images/logo.svg';

import burgerIcon from '../assets/images/burger.svg';
import closeIcon from '../assets/images/close.svg';
import cart from '../assets/images/cart.svg';
import gradientCart from '../assets/images/cart-hover.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className='navigation'>
      <div className='navigation__burger' onClick={toggleMenu}>
        <img
          src={logo}
          alt='logo'
          title='fantasysoccerbet'
          className='navigation__burger__logo'
        />
        <img src={isOpen ? closeIcon : burgerIcon} alt='Menu' title='Menu' />
      </div>
      <ul
        className={`navigation__menu ${isOpen ? 'navigation__burgermenu' : ''}`}
      >
        <li className='navigation__menu__logo'>
          <Link to={'/'}>
            <img src={logo} alt='logo' />
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/' onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to='/' onClick={handleLinkClick}>
            Products
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to='/' onClick={handleLinkClick}>
            <img
              src={isHovered ? gradientCart : cart}
              alt='cart'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
