
import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from "../pages/Home"
import Examen from '../pages/Examen';
import AppBarComponent from '../components/AppBar';

export default function AppRouter() {
    return (
        <Router>
            <AppBarComponent />
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/examen">Examen</Link>
                        </li>
                    </ul>
                </nav>

                {/* 👇️ Wrap your Route components in a Routes component */}
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route path="/examen" element={<Examen />} />
                </Routes>
            </div>
        </Router>
    );
}


