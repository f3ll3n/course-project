import type {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';
import {classNames} from 'shared/lib';

type ButtonProps = {
	theme?: ButtonTheme;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonTheme {
	CLEAR = 'clear',
	ROUNDED = 'rounded',
	SIMPLE = 'simple',
}

export const Button: FC<ButtonProps> = props => {
	const {className = '', theme = 'clear', children, ...otherProps} = props;
	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};

