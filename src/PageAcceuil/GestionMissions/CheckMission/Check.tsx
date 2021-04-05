import React from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const check = (props: any) => {
            return (

                <div>


                    <Table responsive hover border="1px">
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Exigence</th>
                                <th>poid(s) </th>
                                <th>Audites</th>
                                <th>Respectee</th>
                                <th>non respectee</th>
                                <th>Respectee partiellement</th>
                                <th>Non applicable</th>
                                <th>Resultat de l'audit</th>
                                <th>Preuves d'audit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>casque</td>
                                <td>importante</td>
                                <td>Audites</td>
                                <td>oui</td>
                                <td>non</td>
                                <td>non</td>
                                <td>non</td>
                                <td>bien</td>
                                <td>Preuves d'audit</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>les fenetres</td>
                                <td>importante</td>
                                <td>Audites</td>
                                <td>oui</td>
                                <td>non</td>
                                <td>non</td>
                                <td>non</td>
                                <td>bien</td>
                                <td>Preuves d'audit</td>
                            </tr>
                                   
                        </tbody>
                    </Table>
 
                    

                </div>
            )
        }

export default check;