import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanegesMap from './pages/OrphanagesMaps';
import Orphanege from './pages/Orphanage';
import CreateOrphanege from './pages/CreateOrphanage';

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanegesMap} />

                <Route path="/orphanages/create" component={CreateOrphanege} />
                <Route path="/orphanages/:id" component={Orphanege} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;