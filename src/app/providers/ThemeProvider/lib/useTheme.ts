import {useContext} from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';

type useThemeResult = {
	toggleTheme: () => void;
	theme: Theme;
};

export function useTheme(): useThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);



	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		if (!newTheme || !setTheme) {
			throw new Error('hook and new theme is not found');
		}
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	if (!theme) {
		throw new Error('theme is not found');
	}
	return {theme, toggleTheme};
}
