import React from 'react';
import classes from './Card.module.scss'

interface CardProps {
    children: React.ReactNode | JSX.Element,
    className?: any
}

const Card: React.FC<CardProps> = ({children, className}) => {
    return (
        <div className={[classes.card, className].join(' ')}>
            {children}
        </div>
    );
};

export default Card;