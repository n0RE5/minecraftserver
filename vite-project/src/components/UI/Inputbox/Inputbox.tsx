import React from 'react';
import classes from './Inputbox.module.scss'

interface InputboxProps {
    value?: string,
    setValue?: any,
    children?: React.ReactNode | JSX.Element,
    type?: string,
    props?: any
}

const Inputbox: React.FC<InputboxProps> = ({value, setValue, children, type="text", ...props}) => {
    return (
        <div className={classes.inputbox}>
            <div className={classes.inputbox_label}>{children}</div>
            <input {...props} className={classes.inputbox_input} type={type} required value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default Inputbox;