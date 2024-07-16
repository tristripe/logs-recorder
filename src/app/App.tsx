import React, { Suspense } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import { PageLoader } from '@widgets/PageLoader/PageLoader';
import { AppRouter } from './providers/router';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <div className="content-page">
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
