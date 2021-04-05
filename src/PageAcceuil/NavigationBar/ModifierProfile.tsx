import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../GestionMissions/AjoutMission/AjouterMission.module.css';
import Button from '../GestionMissions/Button/Button';
const modifierProfile = (props: any) => {
    return (
        <body
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="container">

                <div className="container">

                    <form>
                        <fieldset>
                            <legend style={{ textAlign: "center", color: "red", fontStyle: "italic", fontWeight: "bold" }}>Modifier Profile</legend>
                            
                            <div className="form-group">

                                <input type="text" className="form-control" id="nom" placeholder="Nom et Prenom" />
                            </div>
                            <div className="form-group">

                                <input type="email" className="form-control" id="email" placeholder="username" />
                            </div>

                            <div className="form-group">

                                <input type="email" className="form-control" id="email" placeholder="Adresse email" />
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control" id="nom" placeholder="mot de passe" />
                            </div>

                            <div className="form-group">

                                <input type="email" className="form-control" id="email" placeholder="Comfirmation mot de passe" />
                            </div>
                            <Button btnType="Success" type="submit">Modifier</Button>
                            <Button clicked={props.clicked} btnType="Danger">Retour</Button>


                        </fieldset>
                    </form>
                </div>
            </div>
        </body>

    );
}

export default modifierProfile;