import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { AboutPageAsync } from '../pages/AboutPage/About.async';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../helpers/classNames/classNames';
const App: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;