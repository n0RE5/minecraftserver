import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card/Card';
import Inputbox from '../../components/UI/Inputbox/Inputbox';
import { changePassword } from '../../httpAPI/userAPI';
import { IRootReducer, IUser } from '../../types/Interfaces';
import { CONTACT_EMAIL } from '../../utils/Consts';

const ProfileSafety: React.FC = () => {
    const [oldPassword, setOldPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const user = useSelector<IRootReducer, IUser>(state => state.userReducer.user)

    const changeUserPassword = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            if (newPassword !== repeatPassword) {
                return console.log("error")
            }
            const response = await changePassword({email: user.email, password: oldPassword}, repeatPassword)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='profile_body'>
            <div className="profile_body__right">
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Password</div>
                        <div className='media_description'>We strongly recommend change your password time by time</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                        <Inputbox value={oldPassword} type="password" setValue={setOldPassword}>Old password</Inputbox>
                        <Inputbox value={newPassword} type="password" setValue={setNewPassword}>New password</Inputbox>
                        <Inputbox value={repeatPassword} type="password" setValue={setRepeatPassword}>Repeat new password</Inputbox>
                        <a onClick={changeUserPassword} className="profile_btn profile_btn__m">Change</a>
                    </div>
                </Card>
            </div>
            <div className="profile_body__left">
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Email</div>
                        <div className='media_description'>You can change email trough <a href={`mailto:${CONTACT_EMAIL}`}>SUPPORT</a> only</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                        <Inputbox {...{placeholder: `${user.email}`, disabled: true}}>Current email</Inputbox>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfileSafety;