import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from '@app/providers/StoreProvider/config/store';
import { StateSchema } from '@app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
