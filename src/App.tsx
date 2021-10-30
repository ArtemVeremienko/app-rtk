import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
    const dispatch = useAppDispatch()
    const { users, isLoading, error } = useAppSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className='App'>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    )
}

export default App
