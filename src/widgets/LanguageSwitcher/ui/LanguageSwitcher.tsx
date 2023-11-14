import type { FC } from 'react';
import cls from './LanguageSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib';

export enum LanguageSwitcherTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}: LanguageSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    const icon = theme === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />;
    return (
        <Button 
            onClick={toggleTheme} 
            theme={ButtonTheme.CLEAR} 
            className={classNames(cls.LanguageSwitcher, {}, [cls[theme], className])}
        >
            {theme === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </Button>            
    );
}

