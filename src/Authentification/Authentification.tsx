import React from 'react';
import { Route } from 'react-router-dom';
import Authentification from './PageAuthentification/PageAuthentification';
import PageAcceuil from '../PageAcceuil/PageAcceuil';

const authentification = () => {
    return (
        <div>
            <Route path='/' exact component={Authentification} />
            <Route path='/acceuil' exact component={PageAcceuil} />
        </div>
    );
}
export default authentification;