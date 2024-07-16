import axios from 'axios';
// import { toast } from 'react-toastify';

// import { errorHandler } from '../helpers'

const { CancelToken } = axios;

const apiFetch = ({
    url,
    method,
    body,
    formData,
    callback,
    error,
    tokens,
    domain,
    errorException,
    cancelToken,
    customHeaders,
    responseType,
    withoutCommonHeaders,
    timeout,
}) => {
    // eslint-disable-next-line no-use-before-define
    const req = createReq(
        {
            method,
            url,
            body,
            formData,
        },
        tokens,
        domain,
        cancelToken,
        customHeaders,
        responseType,
        withoutCommonHeaders,
        timeout,
    );

    return req
        .then((res) => {
            if (callback) callback(res.data);
        })
        .catch((err) => {
            console.dir(err);

            // HOT FIX!!!
            // if (err?.request?.status === 401) {
            //   localStorage.removeItem('Kak2cTokenData');
            //   window.location.replace('/');
            //   return;
            // }

            if (!err.response) {
                return error({});
            }

            const exceptions = [];
            if (errorException) {
                Object.keys(errorException).forEach((key) => {
                    if (err.response.status === Number(key)) {
                        // toast.error(errorException[key]);
                        exceptions.push(Number(key));
                    }
                });
            }

            if (err.response.status === 503 && !exceptions.includes(503)) {
                // toast.error('Сервер Кактус временно недоступен. Попробуйте повторить позднее');
                return;
            }

            /*  Делаем логаут если токен протух */
            if (err.response.request.status === 401 && !exceptions.includes(401) && err.config.headers.Authorization) {
                localStorage.removeItem('Kak2cTokenData');
                window.location.replace('/');
                return;
            }

            if (err.response.request.status === 403) {
                // toast.error('У пользователя недостаточно прав');
                return;
            }

            if (err.response.status !== 200 && !exceptions.includes(err.response.status)) {
                let toastMessage = `При вызове запроса возникла ошибка с кодом ${err.response.status}`;
                if (err.response.data && err.response.data.message) {
                    toastMessage += `: ${err.response.data.message}`;
                }
                // toast.error(toastMessage);
                error(null);
                return;
            }

            if (error) error(err.response);
        });
};

const createReq = (
    { method, url, body, formData },
    tokens,
    domain,
    cancelToken,
    customHeaders,
    responseType,
    withoutCommonHeaders,
    timeout,
) => {
    const config = {
        method,
        headers: {},
        url,
        cancelToken,
    };

    if (!withoutCommonHeaders) {
        config.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    if (customHeaders) {
        config.headers = {
            ...config.headers,
            ...customHeaders,
        };
    }

    if (timeout) {
        config.timeout = timeout;
    }

    if (body) config.data = JSON.stringify(body);

    if (responseType) {
        config.responseType = responseType;
    }

    if (formData) {
        config.data = formData;
        config.headers['Content-Type'] = 'multipart/form-data';
    }

    if (domain) config.headers.Domain = domain;

    return axios(config);
};

export const apiPost = (data) => {
    data.method = 'POST';
    return apiFetch(data);
};

export const apiGet = (data) => {
    data.method = 'GET';
    return apiFetch(data);
};

export const apiPut = (data) => {
    data.method = 'PUT';
    return apiFetch(data);
};

export const apiPatch = (data) => {
    data.method = 'PATCH';
    return apiFetch(data);
};

export const apiDelete = (data) => {
    data.method = 'DELETE';
    return apiFetch(data);
};

export { CancelToken };
