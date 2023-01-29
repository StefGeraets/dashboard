<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { slide } from 'svelte/transition';
	import { Check, DotsVertical, Square } from 'tabler-icons-svelte';
	export let todo: Todo;
	export let action: string;
</script>

<article
	class="w-full space-y-1.5 rounded-lg bg-gray-700 p-4 text-gray-200 shadow"
	transition:slide
>
	<div class="flex justify-between">
		<form {action} method="POST" use:enhance>
			<button class="flex cursor-pointer select-none items-center gap-3" type="submit">
				<input type="hidden" name="todoId" value={todo.id} />
				{#if todo.completed}
					<Check class="text-sky-500" />
				{:else}
					<Square class="text-gray-500" />
				{/if}
				<span class="text-lg font-medium">{todo.title}</span>
			</button>
		</form>
		<button class="rounded p-1 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
			><DotsVertical size="20" /></button
		>
	</div>
	<!-- TODO: {#if todo.tags}
		<div class="flex gap-2">
			{#each todo.tags as tag}
				<span
					class="cursor-pointer whitespace-nowrap rounded-lg bg-blue-500/20 px-2 py-px text-xs font-bold text-blue-200 transition-all hover:brightness-125"
					>{tag.name}</span
				>
			{/each}
		</div>
	{/if} -->
</article>
