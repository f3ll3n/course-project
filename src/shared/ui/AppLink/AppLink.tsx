import type { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    console.log(theme)
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
}

