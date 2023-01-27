import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        userType: null,
        userDocument: null,
        password: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated',
            state.userType = payload.userType,
            state.userDocument = payload.userDocument,
            state.password = payload.password,
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated',
            state.userType = null,
            state.userDocument = null,
            state.password = null,
            state.errorMessage = payload?.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
