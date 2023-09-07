// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Examen from '../pages/Examen';

function AppRouter() {
    return (
        <Router>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/examen" component={Examen} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
