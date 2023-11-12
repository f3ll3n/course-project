import type { FC } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import {MdOutlineDarkMode} from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export enum ThemeSwitcherTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    const icon = theme === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />;
    return (
        // <button>s</button>
        <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [cls[theme], className])}
        >
            {theme === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </Button>            
    );
}

