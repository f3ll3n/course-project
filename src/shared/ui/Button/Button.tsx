import type { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className?: string;
}

export enum ButtonTheme {
    CLEAR = 'clear',
    ROUNDED = 'rounded',
    SIMPLE = 'simple'
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, theme, children, ...otherProps} = props;
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
}

