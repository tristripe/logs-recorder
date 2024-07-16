import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginWindow } from '@entities/Auth/ui/LoginWindow';

const AuthPage = () => {
    const { t } = useTranslation('main');

    return <LoginWindow />;
};

export default AuthPage;
