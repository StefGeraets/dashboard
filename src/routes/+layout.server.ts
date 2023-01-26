import type { LayoutServerLoad } from './$types';
import { WEATHER_API_KEY } from '$env/static/private';
import { PUBLIC_WEATHER_URL } from '$env/static/public';

export const load = (async ({ fetch, setHeaders, url }) => {
	const lat = 51.2475;
	const lon = 5.9014;
	const resWeather = await fetch(
		`${PUBLIC_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
	);
	const resForecast = await fetch(
		`${PUBLIC_WEATHER_URL}forecast?lat=${lat}&lon=${lon}&cnt=4&appid=${WEATHER_API_KEY}&units=metric`
	);

	setHeaders({
		age: '3600',
		'cache-control': 'max-age=3600'
	});

	const weather = await resWeather.json();
	const forecast = await resForecast.json();

	return { weather, forecast, url: url.pathname };
}) satisfies LayoutServerLoad;
