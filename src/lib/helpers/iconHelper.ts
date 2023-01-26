import type { ComponentType, SvelteComponentTyped } from 'svelte';
import {
	Cloud,
	CloudRain,
	CloudSnow,
	CloudStorm,
	Flare,
	Mist,
	Moon,
	MoonStars,
	Sun,
	SunHigh
} from 'tabler-icons-svelte';

const icons: Record<string, [ComponentType<SvelteComponentTyped>, string]> = {
	'01d': [SunHigh, 'text-yellow-400'],
	'01n': [MoonStars, 'text-gray-200'],
	'02d': [Sun, 'text-yellow-200'],
	'02n': [Moon, 'text-gray-400'],
	'03d': [Cloud, 'text-gray-400'],
	'03n': [Cloud, 'text-gray-400'],
	'04d': [Cloud, 'text-gray-600'],
	'04n': [Cloud, 'text-gray-600'],
	'09d': [CloudRain, 'text-gray-600'],
	'09n': [CloudRain, 'text-gray-600'],
	'10d': [CloudRain, 'text-gray-400'],
	'10n': [CloudRain, 'text-gray-400'],
	'11d': [CloudStorm, 'text-gray-400'],
	'11n': [CloudStorm, 'text-gray-400'],
	'13d': [CloudSnow, 'text-sky-300'],
	'13n': [CloudSnow, 'text-sky-300'],
	'50d': [Mist, 'text-gray-400'],
	'50n': [Mist, 'text-gray-400'],
	default: [Flare, 'text-gray-400']
};

export const getWeatherIcon = (iconCode: string) => icons[iconCode];
