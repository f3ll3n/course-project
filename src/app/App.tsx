import React, { Suspense } from 'react';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';


function MyComponent() {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ?  'en' : 'ru')
    }
    return (<>
    <button onClick={toggleLanguage}>{t('Перевод')}</button>
    </>)
  }

const App: React.FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
           
            <div className='content-page'>
                <Sidebar/>
                <AppRouter />
                <Suspense fallback="translate err">
                    <MyComponent />
                </Suspense>
            </div>
        </div>
    )
}

export default App;