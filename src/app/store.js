import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/user/userSlice';

const store = configureStore({
    reducer: {
        userReducer: userReducer
    }
});

export default store;
