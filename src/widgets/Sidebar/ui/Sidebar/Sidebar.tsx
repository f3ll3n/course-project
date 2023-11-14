import { useState, type FC } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
interface SidebarProps {
    className?: 'string'
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(prev => !prev);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
            <Button onClick={onToggle} theme={ButtonTheme.SIMPLE}>
                {collapsed ? '/   >' : '/  <'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

