<script lang="ts">
	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	export let link: string;
	export let title: string;
	export let icon: ComponentType<SvelteComponentTyped>;
	export let collapsed: boolean;
	export let index: number;

	$: path = $page.url.pathname;
</script>

<li>
	<a
		href={link}
		class="group flex cursor-pointer space-x-4 whitespace-nowrap border-r-4 border-solid border-transparent p-4 transition-colors hover:border-sky-400 hover:bg-sky-900/25 hover:text-gray-50  {path ===
		link
			? 'border-sky-900/50 text-gray-50'
			: ''}"
	>
		<svelte:component
			this={icon}
			class="w-6 text-gray-400 group-hover:text-sky-400  {path === link ? 'text-sky-400' : ''}"
		/>
		{#if !collapsed}
			<span in:fly={{ x: -20, delay: 200 + 100 * index }} class=" break-keep">{title}</span>
		{/if}
	</a>
</li>
