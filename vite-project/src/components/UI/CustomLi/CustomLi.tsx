import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classes from './CustomLi.module.scss'

interface CustomLiProps {
    href: string,
    text: string,
    primary?: boolean
}

const CustomLi: React.FC<CustomLiProps> = ({href, text, primary}) => {
    const [active, setActive] = useState<boolean>(false)
    const hoverclasses = [classes.hoverbox]

    if (active) {
        hoverclasses.push(classes.hoverbox_active)
    }

    return (
        <div className={classes.li} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {primary
                ? <div className={[classes.hoverbox, classes.hoverbox_primary].join(' ')}/>
                : <div className={hoverclasses.join(' ')}/>
            }
            <Link to={href}>{text}</Link>
        </div>
    );
};

export default CustomLi;