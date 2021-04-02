import React, { Component } from 'react';
import Logo from '../../assets/pp.jpg';
import imageProfile from '../../assets/profileImage.jpg';
import classes from './NavigationBar.module.css';
import ModifierProfile from './ModifierProfile';
class NavigationBar extends Component {
    state = {
        modif: false
    }
    FormulaireModifProfile = () => {
        this.setState({
            modif: true
        });
    }
    CancelFormulaire = () => {
        this.setState({
            modif: false
        });
    }
    render() {
      return (  <div>

            <img src={Logo} className={classes.LogoCss} alt="logo" />

            <ul className={classes.menuPage}>

                <li className={classes.lienPage}><a className={classes.active} href="#home">Acceuil</a></li>
                <li className={classes.lienPage}><a href="#news">Gestion des Missions</a></li>
                <li className={classes.lienPage}><a href="#contact">Gestion utilisateurs</a></li>
                <li className={classes.lienPage}><a href="#about">About</a></li>

            </ul>
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}>
                    <img className={classes.imagecover} src={imageProfile} alt="logo" />
                </button>
                <div className={classes.dropdowncontent}>
                    <button onClick={this.FormulaireModifProfile} >Mon profile</button>
                    <button onClick={this.FormulaireModifProfile} >Deconnexion</button>

                </div>
                  F.BADI
            </div>
          <ModifierProfile show={this.state.modif} clicked={this.CancelFormulaire}>
          </ModifierProfile>
        </div>
    )}
}
export default NavigationBar;