import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'http://127.0.0.1:3000/user';

export const getAllUser = createAsyncThunk('users/getAllUser', async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

//addUsers:
export const postUser = createAsyncThunk('users/postUser', async (newUser) => {
    try {
        const res = await axios.post(url, newUser);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

//Delete user :

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    try {
        const res = await axios.delete(url + `/${id}`);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

//update user:
export const updateUser = createAsyncThunk('users/updateUser', async (initialUser) => {
    const { id, user } = initialUser;
    try {
        const res = await axios.put(url + `/${id}`, user);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

const userState = {
    isLoading: false,
    users: [],
    error: null
};

export const userSlice = createSlice({
    name: 'users',
    initialState: userState,

    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(getAllUser.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });

        //post users:

        builder.addCase(postUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(postUser.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });

        //delete user:

        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });

        //Update user:
        builder.addCase(updateUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });
    }
});

export default userSlice.reducer;
