import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}: NavbarProps) : JSX.Element | null => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.logo}>
                {'production-project.tsx'}
            </div>


            <div className={cls.links}>
                    <>
                    <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>{t('Главная')}</AppLink>
                    <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
                    </>
            </div>


        </div>
    )
}

