import type { ComponentType, SvelteComponentTyped } from 'svelte';
import {
	IconCloud,
	IconCloudRain,
	IconCloudSnow,
	IconCloudStorm,
	IconFlare,
	IconMist,
	IconMoon,
	IconMoonStars,
	IconSun,
	IconSunHigh
} from '@tabler/icons-svelte';

const icons: Record<string, [ComponentType<SvelteComponentTyped>, string]> = {
	'01d': [IconSunHigh, 'text-yellow-400'],
	'01n': [IconMoonStars, 'text-gray-200'],
	'02d': [IconSun, 'text-yellow-200'],
	'02n': [IconMoon, 'text-gray-400'],
	'03d': [IconCloud, 'text-gray-400'],
	'03n': [IconCloud, 'text-gray-400'],
	'04d': [IconCloud, 'text-gray-600'],
	'04n': [IconCloud, 'text-gray-600'],
	'09d': [IconCloudRain, 'text-gray-600'],
	'09n': [IconCloudRain, 'text-gray-600'],
	'10d': [IconCloudRain, 'text-gray-400'],
	'10n': [IconCloudRain, 'text-gray-400'],
	'11d': [IconCloudStorm, 'text-gray-400'],
	'11n': [IconCloudStorm, 'text-gray-400'],
	'13d': [IconCloudSnow, 'text-sky-300'],
	'13n': [IconCloudSnow, 'text-sky-300'],
	'50d': [IconMist, 'text-gray-400'],
	'50n': [IconMist, 'text-gray-400'],
	default: [IconFlare, 'text-gray-400']
};

export const getWeatherIcon = (iconCode: string) => icons[iconCode];
