import React from 'react';
import Logo from '../../assets/pp.jpg';
import imageProfile from '../../assets/profileImage.jpg';
import classes from './NavigationBar.module.css';
const NavigationBar = () => {
    return (
        <div>
            <img src={Logo} className={classes.LogoCss} alt="logo" />
           
        <ul>
           
            <li><a className={classes.active} href="#home">Acceuil</a></li>
            <li><a href="#news">Gestion des Missions</a></li>
            <li><a href="#contact">Gestion utilisateurs</a></li>
            <li><a href="#about">About</a></li>
            </ul>
            
            <img className={classes.imagecover} src={imageProfile} alt="logo" />
         
            </div>
    );
}
export default NavigationBar;