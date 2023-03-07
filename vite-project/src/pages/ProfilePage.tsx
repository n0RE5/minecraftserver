import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import ProfileNavbar from '../components/ProfileNavbar/ProfileNavbar';
import Card from '../components/UI/Card/Card';
import '../styles/ProfilePage.scss'
import { PROFILE_PATH } from '../utils/RoutePaths';
import ProfileBans from './Profile/ProfileBans';
import ProfileMain from './Profile/ProfileMain';
import ProfileSafety from './Profile/ProfileSafety';

function ProfilePage () {
    const [search] = useSearchParams()
    const [renderedPage, setRenderedPage] = useState<any>(<div/>)
    const page = search.get("page") || ""
    const menu = useRef<any>()

    const hoverButton = (id: number) => {
        for (let i = 0; i < 3; i++) {
            if(i != id) {
                menu.current.children[i].removeAttribute('data-selected')
            }
        }
        menu.current.children[id].setAttribute('data-selected', 'data-selected')
    }

    useEffect(() => {
        switch (page) {
            case "": 
                hoverButton(0)
                setRenderedPage(<ProfileMain/>)
                break;
            case "safety":
                hoverButton(1)
                setRenderedPage(<ProfileSafety/>)
                break;
            case "bans":
                hoverButton(2)
                setRenderedPage(<ProfileBans/>)
                break;
            default:
                setRenderedPage(<ProfileMain/>)
                break;
        }
    }, [page])

    return (
        <>
            <ProfileNavbar />
            <div className='profile'>
                <div className="fixed_container">
                    <div className="profile_w">
                        <Card className="profile_menu">
                            <div className='profile_menu__title'>MENU</div>
                            <ul ref={menu} className='profile_menu__btns'>
                                <Link to={`/profile`}>Main</Link>
                                <Link to={`/profile?page=safety`}>Safety</Link>
                                <Link to={`/profile?page=bans`}>Bans</Link>
                            </ul>
                        </Card>
                        {renderedPage}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;