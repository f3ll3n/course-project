type Mods = Record<string, boolean | string>;
// Очень круто написанный helper, прям чудотворный код, эстетически совершенный
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key),
	].join(' ');
}
