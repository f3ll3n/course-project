import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className: string;
}

export enum ButtonTheme {
    CLEAR = 'clear',
    ROUNDED = 'rounded'
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, theme, children, ...otherProps} = props;
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
}

