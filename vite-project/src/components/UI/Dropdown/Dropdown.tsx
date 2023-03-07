import React from 'react';
import Card from '../Card/Card';
import classes from './Dropdown.module.scss'

interface DropdownProps {
    isActive: boolean,
    setIsActive: (arg0: boolean) => void,
    children: React.ReactNode | JSX.Element
}

const Dropdown: React.FC<DropdownProps> = ({isActive, children}) => {
    const classes_dropdown = [classes.dropdown]

    if (isActive) {
        classes_dropdown.push(classes.dropdown_show)
    }

    return (
        <Card className={classes_dropdown.join(' ')}>
            {children}
        </Card>
    );
};

export default Dropdown;