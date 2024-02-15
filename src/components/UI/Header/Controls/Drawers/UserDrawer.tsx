import React from 'react';
import { Drawer } from 'antd';

interface UserDrawerProps {
    visible: boolean;
    onClose: () => void;
}

const UserDrawer: React.FC<UserDrawerProps> = ({ visible, onClose }) => {
    return (
        <Drawer
            title="Имя пользователя/ Авторизация"
            placement="right"
            visible={visible}
            onClose={onClose}
        >
            <p>Чё-то натыкаем позже</p>
        </Drawer>
    );
}

export default UserDrawer;
