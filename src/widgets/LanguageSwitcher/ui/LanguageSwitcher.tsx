import type {FC} from 'react';
import cls from './LanguageSwitcher.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {classNames} from 'shared/lib';
import {useTranslation} from 'react-i18next';

type LanguageSwitcherProps = {
	className?: string;
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className = ''}: LanguageSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			onClick={toggleLanguage}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.LanguageSwitcher, {}, [className])}
		>
			{i18n.language}
		</Button>
	);
};

