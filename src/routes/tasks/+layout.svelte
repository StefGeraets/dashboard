<script lang="ts">
	import { ArrowsSort, Filter, LayoutGrid, List, Plus } from 'tabler-icons-svelte';
</script>

<header class="mb-6 flex w-full justify-between">
	<div class="flex">
		<button class="btn rounded-r-none"><List /></button>
		<button class="btn -ml-px rounded-l-none"><LayoutGrid /></button>
	</div>
	<div class="flex gap-2">
		<button class="btn gap-1"><Filter /> Filter</button>
		<button class="btn gap-1"><ArrowsSort /> Sort</button>
		<button class="btn primary"><Plus /></button>
	</div>
</header>

<slot />
