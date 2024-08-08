import React from 'react';
import styles from './header.module.css';
import logo from './ports_logo.png';


function Header() {
    // const navigate = useNavigate();
    // const handleSignInClick = () => {
    //     navigate(`/login`)
    // };
    // const handleSignUpClick = () => {
    //     navigate(`/register`)
    // };
    return (
        <div className={styles.component}>
            <img className={styles.logo} src={logo} alt='Logo' />
            <div className={styles.space}></div>
            <div className={styles.sign_wrapper}><div className={styles.sign_button} >Sign In</div></div>
             <div className={styles.sign_wrapper}><div className={styles.sign_button} >Sign Up</div></div>
            
        </div>
    );
}

export default Header;