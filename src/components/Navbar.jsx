import logo from '../assets/logo.png';
import Button from './Button';
import './Navbar.css'

const NavBar = () => {
  return (
    <div className='shadow'>
      <div className="navBar container">
        <div className="traidr_logo">
          <h2>
            <img src={logo} alt="logo" className="navLogo" />
          </h2>
        </div>
        <div className="nav_Links">
          <Button text='Log in' border='none' background='none' color='#E04F16' padding='10px 10px'/>
          <Button text='Sign Up'/>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
