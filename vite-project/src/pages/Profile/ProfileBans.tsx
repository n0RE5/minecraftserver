import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { banUser, getAllBans } from '../../httpAPI/bansAPI';
import { IBan } from '../../types/Interfaces';

const ProfileBans: React.FC = () => {
    const [bans, setBans] = useState<IBan[]>([])

    const getBans = async () => {
        try {
            const response = await getAllBans(1)
            console.log(response);
            return setBans(response.data.rows)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getBans()
    }, []);

    return (
        <div className='profile_body'>
            <div className="profile_body__full">
                <Card className="profile_media">
                    <div className="profile_media__header">
                        <div className='media_title'>Bans</div>
                        <div className='media_description'>Here you can watch history of bans</div>
                    </div>
                    <hr />
                    <div className="profile_media__body">
                        <a onClick={getBans} className="profile_btn profile_btn__server">All</a>
                        <table className='profile_bans_table'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Expires In</th>
                                    <th>Moderator</th>
                                    <th>Status</th>
                                    <th>Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bans.map(ban => 
                                    <tr key={ban.createdAt}>
                                        <td>{ban.createdAt}</td>
                                        <td>{ban.expiresIn}</td>
                                        <td>{ban.bannedBy}</td>
                                        <td>{ban.status}</td>
                                        <td>{ban.reason}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfileBans;