import { toast } from 'react-toastify';
import { setBase64encodedAuthData } from '@entities/Core/model/slice/coreSlice';
import { HOST } from '../../config';
import { useAppDispatch } from '../store';

const useAuth = () => {
    const dispatch = useAppDispatch();

    const fetchAuth = async (login: string, password: string) => {
        const base64encodedData = btoa(`${login}:${password}`);

        try {
            const response = await fetch(`${HOST}/apps`, {
                headers: {
                    Authorization: `Basic ${base64encodedData}`,
                },
            });

            dispatch(setBase64encodedAuthData(base64encodedData));

            if (response.ok) {
                const res = await response.json();
                if (res.success) {
                    console.log(res);
                    /*                    globalState.setAuthorized();
                    globalState.setBase64encodedAuthData(base64encodedData);
                    globalState.setOrganizations(res.accounts); */
                }
            } else {
                throw new Error('Ошибка авторизации');
            }
        } catch (e) {
            toast.error('Ошибка авторизации');
        }
    };
    return fetchAuth;
};

export default useAuth;
