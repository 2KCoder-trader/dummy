import React from 'react';
import styles from './header.module.css';
import logo from './ports_logo.png';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate(`/login`)
    };
    const handleSignUpClick = () => {
        navigate(`/register`)
    };
    return (
        <div className={styles.component}>
            <img className={styles.logo} src={logo} alt='Logo' />
            <div className={styles.space}></div>
            <div className={styles.sign_wrapper}><div className={styles.sign_button} onClick={handleSignInClick}>Sign In</div></div>
             <div className={styles.sign_wrapper}><div className={styles.sign_button} onClick={handleSignUpClick}>Sign Up</div></div>
            
        </div>
    );
}

export default Header;