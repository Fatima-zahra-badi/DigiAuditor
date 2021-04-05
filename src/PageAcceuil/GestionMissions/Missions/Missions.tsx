import React, { Component } from 'react'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import AjouterMission from '../AjoutMission/AjouterMission';
import ModifierMission from '../ModifMission/ModifierMission';

class DataTable extends Component {  
     state = {
         ajout: false,
         modif:false
    }
    FormulaireAjoutMission=() =>{
        this.setState({
            ajout : true
        });
    }
   
    FormulaireModifMission = () => {
        this.setState({
            modif: true
        });
    }
    CancelFormulaire = () => {
        this.setState({
            ajout: false
        });
    }
    CancelFormulaireModif = () => {
        this.setState({
            modif: false
        });
    }

  render() {

      return (
         
          <div>

                 
      <Table responsive hover border="1px">
        <thead>
          <tr>
            <th>L objet de la mission</th>
            <th>Les entites concernees</th>
            <th>Le theme d'audit </th>
            <th>Le responsable de la mission</th>
            <th>Les membres de lequipe</th>
            <th>Le referentiel</th>
            <th>La periode de deroulement</th>
            <th>La duree estimee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
                <tr>
                    <td>L objet de la mission</td>
                    <td>Les entites concernees</td>
                    <td>Le theme d'audit </td>
                    <td>Le responsable de la mission</td>
                    <td>Les membres de l'equipe</td>
                    <td>Le referentiel</td>
                    <td>La periode de deroulement</td>
                    <td>La duree estimee</td>
                          <td>
                              <div className="btn-group mr-2">
                                  <Link to={"/acceuil/check"}>
                                          <button className="btn btn-success">Check</button>
                                      </Link>
                                  <button className="btn btn-warning" onClick={this.FormulaireModifMission}>Mod</button>
                                  <button className="btn btn-danger" >Suppr</button>
                              </div>
                            </td>
                </tr>
                <tr>
                    <td>L objet de la mission</td>
                    <td>Les entites concernees</td>
                    <td>Le theme d'audit </td>
                    <td>Le responsable de la mission</td>
                    <td>Les membres de l'equipe</td>
                    <td>Le referentiel</td>
                    <td>La periode de deroulement</td>
                    <td>La duree estimee</td>
                          <td>
                              <div className="btn-group mr-2">
                                 
                                  <Link to={"/acceuil/check"}>
                                          <button className="btn btn-success">Check</button>
                                      </Link>
                                 
                                   <button className="btn btn-warning" onClick={this.FormulaireModifMission} >Mod</button>
                                  <button className="btn btn-danger">Suppr</button>
                              </div>
                          </td>
                </tr>
                <tr>
                    <td>L objet de la mission</td>
                    <td>Les entites concernees</td>
                    <td>Le theme d'audit </td>
                    <td>Le responsable de la mission</td>
                    <td>Les membres de l'equipe</td>
                    <td>Le referentiel</td>
                    <td>La periode de deroulement</td>
                    <td>La duree estimee</td>
                          <td>
                              <div className="btn-group mr-2">
                                  <Link to={"/acceuil/check"}>
                                      <button className="btn btn-success">Check</button>
                                  </Link>
                                  <button className="btn btn-warning" onClick={this.FormulaireModifMission}>Mod</button>
                                  <button className="btn btn-danger" >Suppr</button>
                              </div>
                          </td>
                </tr>
        </tbody>
              </Table>
              <AjouterMission show={this.state.ajout} clicked={this.CancelFormulaire}>
              </AjouterMission>
              <ModifierMission show={this.state.modif} clicked={this.CancelFormulaireModif}>
                  </ModifierMission>
                  
            
              <button className="btn btn-lg btn-dark btn-block" onClick={this.FormulaireAjoutMission}          
              > Ajouter une mission
                  </button>
                  
           
            </div>
    )
  }
}

export default DataTable;