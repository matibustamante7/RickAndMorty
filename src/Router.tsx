import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RouterLayout } from './common/RouterLayout';
import { CharacterDetail } from './pages/character';


export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/character/:id' element={<CharacterDetail />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}