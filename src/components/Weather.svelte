<script lang="ts">
	import { fade } from 'svelte/transition';
	import { weatherData } from '$lib/stores/weather';
	import { getWeatherIcon } from '$lib/helpers/iconHelper';
	import type { ForecastAPIResponse, WeatherAPIResponse } from '$lib/types/weatherAPI';
	import WeatherPopup from './WeatherPopup.svelte';
	import type { SvelteComponent } from 'svelte';

	let data: WeatherAPIResponse;
	let forecast: ForecastAPIResponse;
	let showPopup: boolean = false;

	weatherData.subscribe((value) => {
		data = value.weather;
		forecast = value.forecast;
	});

	const togglePopup = () => {
		showPopup = !showPopup;
	};
</script>

{#if data}
	<button
		class="flex cursor-pointer rounded-md bg-transparent px-2 py-1 text-gray-300 transition-colors hover:bg-gray-700"
		on:click={togglePopup}
		transition:fade
	>
		<svelte:component
			this={getWeatherIcon(data?.weather[0]?.icon)?.[0]}
			class="{getWeatherIcon(data?.weather[0]?.icon)?.[1]} mr-1"
		/>
		{data?.main?.temp.toFixed(0)}°
	</button>
{/if}

{#if showPopup}
	<WeatherPopup weather={data} {forecast} />
{/if}
