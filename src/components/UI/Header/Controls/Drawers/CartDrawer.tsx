import React from 'react';
import { Drawer } from 'antd';

interface CartDrawerProps {
    visible: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ visible, onClose }) => {
    return (
        <Drawer
            title="Корзина"
            placement="right"
            visible={visible}
            onClose={onClose}
        >
            <p>Чё-то натыкаем позже</p>
        </Drawer>
    );
}

export default CartDrawer;
