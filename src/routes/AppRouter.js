
import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from "../pages/Home"
import Examen from '../pages/Examen';
import AppBarComponent from '../components/AppBar';
import NavBarRouter from '../components/navBar/NavBarRouter';
import ConsultationPage from '../pages/ConsultationPage';

export default function AppRouter() {
    return (
        <Router>
            <AppBarComponent />
            <NavBarRouter />
            <div>
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route path="/examen" element={<Examen />} />
                    <Route path="/constulations" element={<ConsultationPage />} />


                </Routes>
            </div>
        </Router>
    );
}


