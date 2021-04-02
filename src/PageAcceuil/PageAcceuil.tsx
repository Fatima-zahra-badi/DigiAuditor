import React from 'react';
import NavigationBar from '../PageAcceuil/NavigationBar/NavigationBar';
import Missions from '../GestionMissions/Missions';

const PageAcceuil = ()=>{
    return (
        <div>
        <NavigationBar />
            <Missions />
        </div>
        );
}
export default PageAcceuil;