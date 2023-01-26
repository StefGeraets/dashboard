<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import {
		Adjustments,
		ArrowBarLeft,
		ArrowBarRight,
		Calendar,
		ChartArcs3,
		LayoutDashboard,
		LayoutSidebarLeftCollapse,
		ListCheck,
		Writing
	} from 'tabler-icons-svelte';
	import SideNavLink from './SideNavLink.svelte';

	let links = [
		{ link: '/', title: 'Dashboard', icon: LayoutDashboard },
		{ link: '/tasks', title: 'My Tasks', icon: ListCheck },
		{ link: '/notes', title: 'Notes', icon: Writing },
		{ link: '/calendar', title: 'Calendar', icon: Calendar },
		{ link: '/productivity', title: 'Productivity', icon: ChartArcs3 }
	];

	let collapsed: boolean = true;
	const collapse = () => {
		collapsed = !collapsed;
	};
</script>

<aside
	class="relative flex flex-col bg-gray-800 text-gray-400 transition-all duration-500 {collapsed
		? 'w-16'
		: 'w-64'}"
>
	<div class="group">
		<h1
			class=" p-4 text-center text-2xl font-bold uppercase text-sky-400 {collapsed
				? 'cursor-e-resize'
				: 'cursor-w-resize'}"
			on:click={collapse}
			on:keypress={() => {}}
		>
			{#if collapsed}
				<span in:fly={{ x: -10, duration: 200, delay: 100 }} out:fade={{ duration: 100 }}>
					D<span class="text-gray-50">b</span>
				</span>
			{:else}
				<span in:fly={{ x: -10, duration: 200, delay: 100 }} out:fade={{ duration: 100 }}>
					Dash<span class="text-gray-50">board</span>
				</span>
			{/if}
		</h1>
	</div>
	<ul class="mb-auto flex flex-col pt-8">
		{#each links as link, index}
			<SideNavLink link={link.link} title={link.title} icon={link.icon} {collapsed} {index} />
		{/each}
	</ul>

	<div
		class="flex justify-between bg-gray-700/50 transition-all {collapsed
			? 'px-3 pt-4 pb-6'
			: 'px-4 pt-4 pb-6'}"
	>
		<div class="flex space-x-3">
			<a href="/profile">
				<img
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&crop=faces&fit=facearea&facepad=1.5&w=64&h=64&q=80"
					alt="user"
					class="h-10 w-10 rounded-full"
				/>
			</a>
			{#if !collapsed}
				<div in:fly={{ x: -10, delay: 200 }}>
					<a href="/profile" class="text-gray-200">Stef Geraets</a>
					<div class="flex space-x-2 text-xs">
						<a href="/profile">Profile</a>
						<a href="/signout">Logout</a>
					</div>
				</div>
			{/if}
		</div>

		{#if !collapsed}
			<a
				href="/settings"
				class="group flex flex-col items-center space-y-1 rounded text-xs transition-colors hover:text-gray-100"
				in:fly={{ x: -10, delay: 300 }}
			>
				<Adjustments size="20" class="group-hover:text-sky-300" />
				<span class="sr-only">Settings</span>
			</a>
		{/if}
	</div>
</aside>
