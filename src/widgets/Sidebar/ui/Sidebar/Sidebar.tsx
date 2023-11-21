import {useState, type FC} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from 'shared/lib';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LanguageSwitcher} from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({className = ''}) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = (): void => {
		setCollapsed(prev => !prev);
	};

	return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <Button onClick={onToggle} theme={ButtonTheme.SIMPLE}>
            {collapsed ? '/   >' : '/  <'}
        </Button>
        <div className={cls.switchers}>
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div>
    </div>
	);
};

