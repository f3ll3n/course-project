import type {FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';
import cls from './AppLink.module.scss';
import {classNames} from 'shared/lib';

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export const AppLink: FC<AppLinkProps> = props => {
	const {to, className = '', children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
	console.log(theme);
	return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
	);
};

