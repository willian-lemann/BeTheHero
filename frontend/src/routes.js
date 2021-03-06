import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../src/components/pages/Logon';
import Register from '../src/components/pages/Register';
import Profile from '../src/components/pages/Profile';
import NewIncident from '../src/components/pages/NewIncident';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;