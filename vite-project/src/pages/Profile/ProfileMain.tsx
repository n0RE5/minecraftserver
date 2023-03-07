import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card/Card';
import { IRootReducer, IUser } from '../../types/Interfaces';

const ProfileMain: React.FC = () => {
    const user = useSelector<IRootReducer, IUser>(state => state.userReducer.user)
    return (
        <div className='profile_body'>
            <div className="profile_body__left">
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Your Data</div>
                        <div className='media_description'>Account information</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                        <div className='profile_infobox'>
                            <div className='profile_infobox__left'>Username</div>
                            <div className='profile_infobox__right'>{user.username}</div>
                        </div>
                        <div className='profile_infobox'>
                            <div className='profile_infobox__left'>Email</div>
                            <div className='profile_infobox__right'>{user.email}</div>
                        </div>
                        <div className='profile_infobox'>
                            <div className='profile_infobox__left'>Registration</div>
                            <div className='profile_infobox__right'>N/A</div>
                        </div>
                    </div>
                </Card>
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Your Balance</div>
                        <div className='media_description'>Your currect balance</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                        <div className='profile_body_balance'>0.00 $</div>
                    </div>
                </Card>
            </div>
            <div className="profile_body__right">
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Skin & Cape</div>
                        <div className='media_description'>Here you can change your skin on our servers</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfileMain;