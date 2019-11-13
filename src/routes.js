import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Kanban from './pages/Kanban';
import New from './pages/New';

function Routes(){
    return(
        < Switch >
            <Route path="/" exact component={Kanban} />
            <Route path="/new" component={New} />
        </ Switch>
    );
}

export default Routes;