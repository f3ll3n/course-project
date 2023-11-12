import { classNames } from "shared/classNames";
import cls from './Navbar.module.scss';
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}: NavbarProps) : JSX.Element | null => {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
            </div>
            <div className={cls.toggleTheme}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

