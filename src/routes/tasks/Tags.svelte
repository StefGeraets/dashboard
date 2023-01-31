<script lang="ts">
	import type { Tag } from '@prisma/client';

	export let tags: Tag[];
</script>

<div class="ml-3 flex gap-2">
	{#each tags as tag}
		<span
			class=" cursor-pointer whitespace-nowrap rounded-lg bg-blue-500/20 px-2 py-px text-xs font-bold text-blue-200 transition-all hover:brightness-125"
			>{tag.name}</span
		>
	{/each}
</div>
