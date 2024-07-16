import { combineReducers } from '@reduxjs/toolkit';
import { coreSlice } from '@entities/Core/model/slice/coreSlice';

const rootReducer = combineReducers({
    // @ts-ignore
    core: coreSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
