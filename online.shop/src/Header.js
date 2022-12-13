import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from './store/stateProvider';
import { auth } from './config/firebase';

const Header = () => {
  const [{ cart, user }] = useStateValue();
  const userName = user ? user.email.substring(0, user.email.indexOf('@')) : 'Guest';

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="htthttps://www.google.com/url?sa=i&url=https%3A%2F%2Fdamion.club%2F41213-narisovannye-krossovki.html&psig=AOvVaw1U-ktZdUQYGYCChMXkjDzx&ust=1671006595715000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLia7uaW9vsCFQAAAAAdAAAAABAE"
          alt="logo"
        />
      </Link>

      <div className="header-actions-wrapper">
        <Link to={!user ? '/login' : '/'} className="header-actions-link">
          <div className="actions-option">
            <span className="line1">{`Hi ${userName}`}</span>
            <button onClick={handleSignOut} type="button" className="line2 buttons-nav">
              {user ? 'Sign Out' : 'Sing In'}
            </button>
          </div>
        </Link>
        <Link to={!user ? '/login' : '/orders'} className="header-actions-link">
          <div className="actions-option">
            <span className="line1">Ваши</span>
            <button type="button" className="line2 buttons-nav">
            Заказы
            </button>
          </div>
        </Link>
        <Link to="/checkout" className="header-actions-link">
          <div className="actions-optionCart">
            <ShoppingBasketIcon className="nav-cartImg" />
            <span className="line1 nav-cartCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;