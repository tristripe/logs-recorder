import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoreSchema } from '@entities/Core';

const initialState: CoreSchema = {
    isAuthorized: false,
    base64encodedAuthData: '',
    loading: false,
};

export const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        signIn: (_state, _payload: PayloadAction<any>) => {},
        setAuthorized: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        },
        setBase64encodedAuthData: (state, action: PayloadAction<string>) => {
            state.base64encodedAuthData = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { signIn, setAuthorized, setBase64encodedAuthData, setLoading } = coreSlice.actions;
export default coreSlice.actions;
