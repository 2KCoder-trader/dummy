import React from 'react';
import styles from './footer.module.css';
import Ports from './ports_logo.png'
import X from './X Logo.png';
import I from './Logo Instagram.png';
import Y from './Logo YouTube.png';
import L from './LinkedIn.png';


function Icons(){
    return (
        <div className={styles.icon_grid}>
                    <img className={styles.P} src= {Ports}/>
                    <img className={styles.X} src= {X}/>
                    <img className={styles.I} src= {I}/>
                    <img className={styles.Y} src= {Y}/>
                    <img className={styles.L} src= {L}/>
                </div>
    )
}
function Info1(){
    return (
        <div className={styles.text_grid}>
    <div className={styles.title}>Company</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    </div>
    );
}
function Info2(){
    return (
        <div className={styles.text_grid}>
    <div className={styles.title}>Legal</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    </div>
    );
}
function Info3(){
    return (
        <div className={styles.text_grid}>
    <div className={styles.title}>Resources</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    <div>Information</div>
    </div>
    );
}

function Footer() {
    return (
        <div className={styles.component}>
            <img className= {styles.image_background} src = {Ports}/>
            <div className={styles.grid_layout}>
                <Icons/>
                <Info1/>
                <Info2/>
                <Info3/>
            </div>
            
        </div>
    );
}

export default Footer;