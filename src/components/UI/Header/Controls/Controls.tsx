import React, { useState } from 'react';
import { Button } from 'antd';
import UserDrawer from './Drawers/UserDrawer';
import CartDrawer from './Drawers/CartDrawer';
import cl from "./Controls.module.scss";

function Controls(): JSX.Element {
    const [isUserDrawerVisible, setIsUserDrawerVisible] = useState<boolean>(false);
    const [isCartDrawerVisible, setIsCartDrawerVisible] = useState<boolean>(false);

    const showUserDrawer = () => {
        setIsUserDrawerVisible(true);
    };

    const showCartDrawer = () => {
        setIsCartDrawerVisible(true);
    };

    return (
        <div className={cl.Controls}>
            <Button className={`${cl.btn} ${cl.user}`} onClick={showUserDrawer} />

            <Button className={`${cl.btn} ${cl.cart}`} onClick={showCartDrawer} />

            <UserDrawer visible={isUserDrawerVisible} onClose={() => setIsUserDrawerVisible(false)} />
            <CartDrawer visible={isCartDrawerVisible} onClose={() => setIsCartDrawerVisible(false)} />
        </div>
    );
}

export default Controls;
