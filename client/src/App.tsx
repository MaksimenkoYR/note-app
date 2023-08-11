import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { UserSlice } from './store/reducers/UserSlice';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';

function App() {
  const [userName, setUserName] = useState('')
  const users = useAppSelector(store => store.userReducer.users)
  const addUserAction = UserSlice.actions.addUser
  const dispatch = useAppDispatch()
  const addUser = () => {
    dispatch(addUserAction({ name: userName, id: Date.now() }))
  }
  return (
    <div className='flex justify-center items-center h-screen'>

      <Routes>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
