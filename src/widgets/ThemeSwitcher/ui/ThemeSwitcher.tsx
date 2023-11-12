import type {FC} from 'react';
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {MdOutlineDarkMode} from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {classNames} from 'shared/lib';

export enum ThemeSwitcherTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className = ''}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();
	return (
		<Button
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [cls[theme], className])}
		>
			{theme === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />}
		</Button>
	);
};

