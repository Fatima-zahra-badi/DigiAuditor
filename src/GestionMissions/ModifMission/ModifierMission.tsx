import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../AjoutMission/AjouterMission.module.css';
import Button from '../../GestionMissions/Button/Button';
const modifierMission = (props: any) => {
    
    return (
        <body
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
                opacity : props.show? '1' : '0'
        }}>
            <div className="container">
                
                                <div className="container">
                                    
                                    <form>
                        <fieldset>
                            <legend style={{ textAlign: "center", color: "orangered", fontStyle: "italic", fontWeight: "bold" }}>Modifier mission</legend>

                                            <div className="form-group">
                                              
                                                 <input type="text" className="form-control" id="nom" placeholder="Objet de la mission"/>
                                            </div>

                                                <div className="form-group">
                                                   
                                                    <input type="email" className="form-control" id="email" placeholder="Entites de la mission"/>
                                                </div>
                            <div className="form-group">
                               
                                <input type="text" className="form-control" id="nom" placeholder="Le theme de la mission" />
                            </div>

                            <div className="form-group">
                               
                                <input type="email" className="form-control" id="email" placeholder="Le Responsable de la mission" />
                            </div>
                            <div className="form-group">
                               
                                <input type="email" className="form-control" id="email" placeholder="Referentiels de la mission" />
                            </div>
                            <div className="form-group">
                               
                                <input type="email" className="form-control" id="email" placeholder="La periode de deroulement" />
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

export default modifierMission;