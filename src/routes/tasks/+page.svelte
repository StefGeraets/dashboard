<script lang="ts">
	import Todo from './Todo.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex items-start gap-6">
	<div class="w-1/3 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg uppercase tracking-wide text-gray-300">Habits</h2>
		<div class="flex flex-col gap-4" />
	</div>
	<div class="w-1/3 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Todo</h2>
		<div class="flex flex-col gap-4">
			{#each data.todos as todo}
				<Todo {todo} action="?/toggleTodo" />
			{/each}
		</div>
	</div>
	<div class="w-1/3 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Completed</h2>
		<div class="flex flex-col gap-4">
			{#each data.completedTodos as todo}
				<Todo {todo} action="tasks?/toggleTodo" />
			{/each}
		</div>
	</div>
</main>
