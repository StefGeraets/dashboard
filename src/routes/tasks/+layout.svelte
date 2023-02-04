<script lang="ts">
	import { IconArrowsSort, IconFilter, IconLayoutGrid, IconList } from '@tabler/icons-svelte';
</script>

<header class="mb-6 flex w-full justify-between">
	<div class="flex">
		<button class="btn rounded-r-none"><IconList /></button>
		<button class="btn -ml-px rounded-l-none"><IconLayoutGrid /></button>
	</div>
	<div class="flex gap-2">
		<button class="btn gap-1"><IconFilter /> Filter</button>
		<button class="btn gap-1"><IconArrowsSort /> Sort</button>
	</div>
</header>

<slot />
