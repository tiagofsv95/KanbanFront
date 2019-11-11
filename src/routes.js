import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Kanban from './components/Kanban';
//import New from './pages/New';

function Routes(){
    return(
        < Switch >
            <Route path="/" exact component={Kanban} />
        </ Switch>
    );
}

export default Routes;