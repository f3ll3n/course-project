import React from 'react';
import cls from './Navbar.module.scss';
import {AppLink} from 'shared/ui';
import {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib';
type NavbarProps = {
	className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({className}) => {
	const {t} = useTranslation('navbar');

	return (
		<div className={classNames(cls.navbar, {}, [])}>
			<div className={cls.logo}>
				production-projec
			</div>

			<div className={cls.links}>
				<>
					<AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>{t('Главная')}</AppLink>
					<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
				</>
			</div>

		</div>
	);
};

