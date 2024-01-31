import React from 'react';
import cl from './Footer.module.scss'
import {Layout} from "antd";

const Footer = () => {
    return (
        <Layout.Footer>
            <img className={cl.rofl} src={'https://i.imgur.com/uQCPP4v.png'} alt={'rofl'}/>
        </Layout.Footer>
    );
};

export default Footer;