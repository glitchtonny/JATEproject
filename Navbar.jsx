
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav style={styles.nav}>

      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      <ul style={styles.navList}>
      <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>LOGIN</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>HOME</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>COLLECTIONS</Link>
        </li>
        {/* <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li> */}
        
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'blue',
    padding: '10px',
    marginbottom: '10px'
  },
  logoContainer: {
    paddingTop: '10px',
    marginRight: '10px',
    marginLeft: '10px',

  },
  logo: {
    height: '40px',
    width: 'auto'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0
  },
  navItem: {

  },
  navLink: {
    color: 'orange',
    textDecoration: 'underline overline',
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '8px 12px',
    transition: 'color 0.3s, background-color 0.3s',
    borderRadius: '4px'
  },
  navLinkHover: {
    backgroundColor: 'red',
    color: 'red'
  }
  
};

export default Navbar;
