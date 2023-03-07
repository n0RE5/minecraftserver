import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootReducer } from '../../types/Interfaces';
import { AUTH_PATH, MAIN_PATH, PROFILE_PATH, START_PATH } from '../../utils/RoutePaths';
import CustomLi from '../UI/CustomLi/CustomLi';
import classes from './Navbar.module.scss'

const Navbar: React.FC = () => {
    const isAuth = useSelector<IRootReducer, boolean>(state => state.userReducer.isAuth)

    return (
        <div className={classes.navbar_w}>
            <Link to={MAIN_PATH} className={classes.title}>MinecraftSerwer</Link>
            <ul className={classes.navbar_ul}>
                <CustomLi text="Main Page" href={MAIN_PATH} primary/>
                <CustomLi text="Start Playing" href={START_PATH} />
                <CustomLi text="News" href="/" />
                <CustomLi text="Profile" href={isAuth ? PROFILE_PATH : AUTH_PATH} />
            </ul>
        </div>
    );
};

export default Navbar;