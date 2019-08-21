import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    {/* Switch me garante que apenas uma rota será chamada por url */ }
    return (
        <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;