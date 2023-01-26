<script lang="ts">
	import '@fontsource/kumbh-sans/300.css';
	import '@fontsource/kumbh-sans/500.css';
	import '@fontsource/kumbh-sans/700.css';
	import '../app.css';

	import type { LayoutData } from './$types';
	import Header from '../components/Header.svelte';
	import { weatherData } from '../lib/stores/weather';
	import SideNav from '../components/SideNav.svelte';
	import PageTransition from '../components/PageTransition.svelte';

	export let data: LayoutData;

	weatherData.set({ weather: data.weather, forecast: data.forecast });
</script>

<div class="flex h-screen w-screen overflow-hidden">
	<SideNav />

	<main class="flex-1 overflow-hidden border-l border-solid border-l-gray-900 bg-gray-900">
		<Header />
		<div class="relative mx-2 h-body overflow-y-scroll py-4 px-10 font-light">
			<PageTransition key={data.url}>
				<slot />
			</PageTransition>
		</div>
	</main>
</div>
