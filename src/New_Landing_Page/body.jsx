import React from 'react';
import styles from './body.module.css';


function Body() {
    return (
        <div className={styles.component}>
            <div className={styles.title}>Ports</div>
            <div className={styles.tagline}>By Investors, For Investors</div>
            <div className={styles.demo_wrap}><div className={styles.demo}>Explore The Ports</div></div>
        </div>
    );
}

export default Body;