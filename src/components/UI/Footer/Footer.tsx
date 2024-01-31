import React from 'react';
import cl from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={cl.Footer}>
            <img className={cl.rofl} src={'https://i.imgur.com/uQCPP4v.png'} alt={'rofl'}/>
        </div>
    );
};

export default Footer;