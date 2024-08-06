import React from "react";
import styles from './landing.module.css';
import Header from './header';
import Body from './body';
import Footer from '../New_Footer/footer';

function Landing() {


    return (
       <div className={styles.structure}>
            <Header/>
            <Body/>
           <Footer/>
       </div>
    )
}

export default Landing;