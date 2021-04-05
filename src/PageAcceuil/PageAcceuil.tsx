import React from 'react';
import NavigationBar from '../PageAcceuil/NavigationBar/NavigationBar';
import Missions from './GestionMissions/Missions/Missions';
import check from './GestionMissions/CheckMission/Check';
import { Route, BrowserRouter } from 'react-router-dom';


const PageAcceuil = ()=>{
    return (
        <div>
            <NavigationBar />
            <BrowserRouter>
            <Route path="/acceuil" exact component={Missions} />
             <Route path="/acceuil/check" component={check} />
            </BrowserRouter>
        </div>
        );
}
export default PageAcceuil;