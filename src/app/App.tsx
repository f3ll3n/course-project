import React, { Suspense } from 'react';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';



const App: React.FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
           
            <div className='content-page'>
                <Sidebar/>
                <AppRouter />
            </div>
        </div>
    )
}

export default App;