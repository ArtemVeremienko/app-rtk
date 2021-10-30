import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from './../../models/IUser'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (e) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
})
