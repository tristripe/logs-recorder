import React, { useCallback, useState } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { Modal } from '@shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                Войти
            </Button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Here will be something
            </Modal>
        </div>
    );
};
