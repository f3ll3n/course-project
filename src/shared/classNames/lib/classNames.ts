
type Mods = Record<string, boolean | string>
//очень круто написанный helper, прям чудотворный код, эстетически совершенный
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key),
    ].join(' ');
}