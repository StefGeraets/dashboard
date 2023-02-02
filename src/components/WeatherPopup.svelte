<script lang="ts">
	import type { ForecastAPIResponse, WeatherAPIResponse } from '$lib/types/weatherAPI';
	import { fly } from 'svelte/transition';
	import { getWeatherIcon } from '$lib/helpers/iconHelper';
	import { clickOutside } from '$lib/helpers/actions';

	export let weather: WeatherAPIResponse;
	export let forecast: ForecastAPIResponse;
	export let toggle: () => void;

	const needJacket = (data: WeatherAPIResponse): 'yes' | 'no' => {
		const feelsLike = data?.main?.feels_like;
		const isRaining = data?.weather[0]?.main === 'Rain' ? true : false;

		if (isRaining) return 'yes';
		if (feelsLike <= 14) return 'yes';
		return 'no';
	};
</script>

<div
	class="absolute right-10 top-10 z-10 flex w-96 gap-10 rounded-md bg-gray-800 p-6 shadow-lg"
	transition:fly={{ y: -20 }}
	use:clickOutside
	on:outclick={() => toggle()}
>
	<div class="flex flex-col justify-between space-y-4 text-gray-100">
		<div>
			<p class="text-4xl font-light" in:fly={{ y: 5, duration: 400, delay: 200 }}>
				{weather?.main?.temp.toFixed(0)}°
			</p>

			<div class="space-x-1 text-sm font-light text-gray-400">
				<span in:fly={{ x: 5, delay: 300 }}>H: {weather?.main?.temp_max.toFixed(1)}°</span>
				<span in:fly={{ x: 5, delay: 400 }}>L: {weather?.main?.temp_min.toFixed(1)}°</span>
			</div>
		</div>

		<div>
			<div in:fly={{ y: 5, duration: 400, delay: 500 }}>
				<svelte:component
					this={getWeatherIcon(weather?.weather[0]?.icon)?.[0]}
					size="48"
					strokeWidth="1.5"
				/>
			</div>
			<div class="text-sm font-light capitalize text-gray-400" in:fly={{ x: 5, delay: 600 }}>
				{weather?.weather[0]?.description}
			</div>
		</div>
	</div>
	<div class="flex flex-col font-light text-gray-400">
		<div class="grid grid-cols-2 grid-rows-5 items-end justify-items-end gap-2 gap-y-3.5 text-sm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-sunrise"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				in:fly={{ y: -10, delay: 600 }}
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
				<line x1="3" y1="21" x2="21" y2="21" />
				<path d="M12 9v-6l3 3m-6 0l3 -3" />
			</svg>
			<span in:fly={{ y: -10, delay: 600 }}>
				{('0' + new Date(weather?.sys?.sunrise * 1000).getHours()).slice(-2)}:{(
					'0' + new Date(weather?.sys?.sunrise * 1000).getMinutes()
				).slice(-2)}
			</span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-sunset"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				in:fly={{ y: -10, delay: 700 }}
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
				<line x1="3" y1="21" x2="21" y2="21" />
				<path d="M12 3v6l3 -3m-6 0l3 3" />
			</svg>
			<span in:fly={{ y: -10, delay: 700 }}>
				{('0' + new Date(weather?.sys?.sunset * 1000).getHours()).slice(-2)}:{(
					'0' + new Date(weather?.sys?.sunset * 1000).getMinutes()
				).slice(-2)}
			</span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-wind"
				width="20"
				height="20"
				in:fly={{ y: -10, delay: 800 }}
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
				<path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
				<path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
			</svg>
			<span in:fly={{ y: -10, delay: 800 }}
				>{((weather?.wind?.speed * 3600) / 1000).toFixed(0)}km/h</span
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-droplet"
				width="20"
				height="20"
				in:fly={{ y: -10, delay: 900 }}
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
			</svg>
			<span in:fly={{ y: -10, delay: 900 }}>{weather?.main?.humidity}%</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-jacket"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				in:fly={{ y: -10, delay: 1000 }}
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M16 3l-4 5l-4 -5" />
				<path
					d="M12 19a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-8.172a2 2 0 0 1 .586 -1.414l.828 -.828a2 2 0 0 0 .586 -1.414v-2.172a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828 .828a2 2 0 0 1 .586 1.414v8.172a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z"
				/>
				<path d="M20 13h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
				<path d="M4 17h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
				<path d="M12 19v-11" />
			</svg>
			<span class="capitalize" in:fly={{ y: -10, delay: 1000 }}>{needJacket(weather)}</span>
		</div>
	</div>
	<ul class="flex flex-col space-y-3">
		{#each forecast?.list as item, i}
			<li
				class="flex items-center justify-between gap-2 text-gray-400"
				in:fly={{ y: -10, delay: 600 + 150 * i }}
			>
				<svelte:component
					this={getWeatherIcon(item?.weather[0]?.icon)?.[0]}
					class={getWeatherIcon(item?.weather[0]?.icon)?.[1]}
					size="24"
				/>
				<div class="text-xs font-medium leading-tight">
					<p>{('0' + new Date(item?.dt * 1000).getHours()).slice(-2)}H</p>
					<p class="text-gray-200">{item?.main?.temp.toFixed(0)}°</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
