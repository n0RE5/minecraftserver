import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../../utils/Consts';
import classes from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className="contain">
            <div className={classes.footer_w}>
                <ul className={classes.footer_ul}>
                    <li><Link to=''>Terms of use</Link></li>
                    <li><Link to=''>Privacy policy</Link></li>
                    <li><a href={`mailto:${CONTACT_EMAIL}`}>Contacts</a></li>
                </ul>
                <div className={classes.footer_copy}>&copy; 2023 MinecraftServer.com </div>
            </div>
        </div>
    );
};

export default Footer;