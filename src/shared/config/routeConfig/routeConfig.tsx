import { RouteProps } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { AuthPage } from '@pages/AuthPage';

export enum PublicAppRoutes {
    AUTH_PAGE = 'auth_page',
    NOT_FOUND = 'not_found',
}

export enum PrivateAppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const PublicRoutePath: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.AUTH_PAGE]: '/',
    [PublicAppRoutes.NOT_FOUND]: '*',
};

export const PrivateRoutePath: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.MAIN]: '/',
    [PrivateAppRoutes.NOT_FOUND]: '*',
};

export const publicRouteConfig: Record<PublicAppRoutes, RouteProps> = {
    [PublicAppRoutes.NOT_FOUND]: {
        path: PublicRoutePath.not_found,
        element: <NotFoundPage />,
    },
    [PublicAppRoutes.AUTH_PAGE]: {
        path: PublicRoutePath.auth_page,
        element: <AuthPage />,
    },
};

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.MAIN]: {
        path: PrivateRoutePath.main,
        element: <MainPage />,
    },
    [PrivateAppRoutes.NOT_FOUND]: {
        path: PrivateRoutePath.not_found,
        element: <NotFoundPage />,
    },
};
