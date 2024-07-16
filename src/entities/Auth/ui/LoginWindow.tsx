import InputWrapper from '@shared/ui/InputWrapper/InputWrapper';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './LoginWindow.module.scss';
import useAuth from '../../../hooks/useAuth';

export const LoginWindow = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const fetchAuth = useAuth();

    const handleAuth = () => {
        setLoading(true);

        fetchAuth(login, password);

        setLoading(false);
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__wrap}>
                <h3>Войти</h3>
                <div className={styles.login__block}>
                    <InputWrapper
                        className={styles.login__input}
                        label="Логин"
                        type="email"
                        value={login}
                        handleChange={(e) => setLogin(e.target.value)}
                    />
                    <InputWrapper
                        className={styles.login__input}
                        label="Пароль"
                        type="password"
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className={styles.btn}
                    onClick={handleAuth}
                    disabled={(!login && !password) || loading}
                    type="button"
                >
                    Войти
                </button>
            </div>
        </div>
    );
};
