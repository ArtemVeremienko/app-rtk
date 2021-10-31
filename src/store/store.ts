import { postAPI } from './../services/PostService'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    users: userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
