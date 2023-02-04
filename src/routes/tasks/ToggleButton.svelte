<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { draw, scale } from 'svelte/transition';
	import { IconCheck } from '@tabler/icons-svelte';

	export let todo: Todo;
</script>

<form action="tasks?/toggleTodo" method="POST" use:enhance class="self-start">
	<button
		class="group relative flex h-7 w-7 cursor-pointer select-none items-center justify-center gap-3 rounded border-2 text-start {todo.completed
			? 'border-none'
			: 'border-gray-400'}"
		type="submit"
	>
		<input type="hidden" name="todoId" value={todo.id} />
		{#if todo.completed}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="absolute right-0 -top-1 text-sky-400"
				width="38"
				height="38"
				viewBox="0 0 24 24"
				stroke-width="1.25"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				out:scale
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M9 11l3 3l8 -8" transition:draw={{ duration: 300, delay: 300 }} />
				<path
					d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"
					transition:draw={{ duration: 400 }}
				/>
			</svg>
		{:else}
			<IconCheck
				size={24}
				class="text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			/>
		{/if}
	</button>
</form>
