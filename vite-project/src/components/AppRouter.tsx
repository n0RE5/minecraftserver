import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { auth_routes, public_routes } from '../Routes';
import { IRootReducer } from '../types/Interfaces';
import Navbar from './Navbar/Navbar';

const AppRouter: React.FC = () => {
    const isAuth = useSelector<IRootReducer, boolean>(state => state.userReducer.isAuth)
    return (
        <Routes>
            {isAuth && auth_routes.map(({path, element}, index) =>
                <Route key={path+index} path={path} element={element} />
            )}
            {public_routes.map(({path, element}, index) => 
                <Route key={path+index} path={path} element={element} />
            )}
        </Routes>
    );
};

export default AppRouter;