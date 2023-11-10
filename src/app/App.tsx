import React from 'react';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
const App: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;