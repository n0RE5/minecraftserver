import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsAuth, setUser } from '../../store/userSlice';
import { IRootReducer, IUser } from '../../types/Interfaces';
import { MAIN_PATH } from '../../utils/RoutePaths';
import Card from '../UI/Card/Card';
import Dropdown from '../UI/Dropdown/Dropdown';
import classes from './ProfileNavbar.module.scss';

const ProfileNavbar: React.FC = () => {
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector<IRootReducer, IUser>(state => state.userReducer.user)

    const logout = (e: React.MouseEvent) => {
        e.preventDefault()
        localStorage.removeItem('token')
        dispatch(setUser({}))
        dispatch(setIsAuth(false))
        navigate('/')
    }   

    return (
        <div className={classes.profilenav}>
            <div className="fixed_container">
                <div className={classes.profilenav_w}>
                    <div className={classes.profilenav_left}>
                        <Link to={MAIN_PATH} className={classes.profilenav_title}>MinecraftServer</Link>
                        <ul className={classes.profilenav_links}>
                            <Link to={MAIN_PATH}>Main</Link>
                            <Link to={MAIN_PATH}>News</Link>
                            <Link to={MAIN_PATH}>Forum</Link>
                        </ul>
                    </div>
                    <div className={classes.profilenav_right}>
                        <div className={classes.profilenav_hr}/>
                        <div>
                            <a className={classes.profilenav_email} onClick={() => setIsDropdownActive((prev) => !prev)}>{user.username} <span></span></a>
                            <Dropdown isActive={isDropdownActive} setIsActive={setIsDropdownActive}>
                                <a onClick={logout} className={classes.profilenav_dd}>Logout</a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileNavbar;