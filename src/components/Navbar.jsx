import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './Button';
import './Navbar.css';
import { MdNotifications } from 'react-icons/md';
import profileImage from '../assets/profile-image.png';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../context/cartContext';
import { isUserLoggedIn } from '../../utils/auth';

const style = {
  borderRadius: '50%',
  border: '1px #333 solid',
  width: '50px',
  height: '50px',
  overflow: 'hidden',
  countStyle: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    top: '-13px',
    left: '10px',
    borderRadius: '50%',
    background: '#E04F16 ',
    padding: '2px 6px',
    margin: 'auto',
    fontSize: '8px',
    color: '#fff',
    fontWeight: 'bold',
  },
};

const NavBar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="shadow nav" style={{ position: 'relative' }}>
      <div className="navBar container" style={{position:'sticky', top: 0}}>
        <div className="traidr_logo">
          <Link to="/">
            <img src={logo} alt="logo" className="navLogo" />
          </Link>
        </div>

        <div className="nav_Links">
          <span style={{ position: `${cart.length ? 'relative' : 'static'}` }}>
            {cart.length ? (
              <small style={style.countStyle}>{cart.length}</small>
            ) : (
              ''
            )}

            <FaCartShopping
              onClick={() => navigate('/cart')}
              className="cursor-pointer hover"
            />
          </span>

          {!isUserLoggedIn ? (
            <div >
              <Button
                handleClick={() => navigate('/login')}
                text="Log in"
                border="none"
                background="none"
                color="#E04F16"
                padding="10px 10px"
              />
              <Button handleClick={() => navigate('/signup')} text="Sign Up" />
            </div>
          ) : (
            <div className="nav-elements flex align-center">
              <span style={{ position: 'relative' }}>
                <small style={style.countStyle}>1</small>
                <MdNotifications size={20} />
              </span>

              <div style={style} className="profile">
                <img width={50} src={profileImage} alt="" />
              </div>

              {location.pathname === '/userloggedin' ? (
                <Button
                  handleClick={() => navigate('/shop')}
                  text="Start Selling"
                />
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
