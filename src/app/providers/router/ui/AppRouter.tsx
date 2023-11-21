import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config';
import {useTranslation} from 'react-i18next';

export function AppRouter() {
    const {t} = useTranslation('main')
	return (
    <Suspense fallback={<div>{t('Загрузка...')}</div>}>
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className='page-wrapper'>
                            {element}

                        </div>
						)}
					/>
				))}
        </Routes>
    </Suspense>
	);
}
