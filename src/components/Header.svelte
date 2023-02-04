<script lang="ts">
	import { IconSearch } from '@tabler/icons-svelte';
	import LiveTime from './LiveTime.svelte';
	import Weather from './Weather.svelte';
</script>

<header class=" flex items-center justify-between bg-gray-800/50 py-4 px-10">
	<label
		class="group flex items-center space-x-4 rounded-md bg-gray-800 px-2 py-2 text-gray-400 focus-within:ring-1 focus-within:ring-sky-700"
	>
		<IconSearch class="group-focus-within:text-sky-500" />
		<input
			type="input"
			name="search"
			placeholder="search"
			class="appearance-none bg-transparent placeholder:italic placeholder:text-gray-600 focus:text-gray-300 focus:outline-none focus:placeholder:text-gray-500"
		/>
		<div
			class="flex items-center rounded border border-gray-700 bg-gray-700/10 p-1 text-xs text-gray-400"
		>
			⌘ K
		</div>
	</label>
	<div class="relative flex items-center space-x-3 text-gray-500">
		<Weather />
		<LiveTime />
	</div>
</header>
