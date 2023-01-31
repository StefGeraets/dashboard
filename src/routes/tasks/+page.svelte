<script lang="ts">
	import Todo from './Todo.svelte';
	import type { PageData } from './$types';
	import CreateForm from './CreateForm.svelte';
	import { Plus } from 'tabler-icons-svelte';
	import { slide } from 'svelte/transition';

	export let data: PageData;

	let opened: boolean = false;

	const toggleForm = () => {
		opened = !opened;
	};
</script>

<main class="flex items-start gap-6">
	<div class="w-5/12 rounded-md bg-gray-800 px-4 py-3 shadow">
		<div class="flex justify-between">
			<h2 class="pb-3 text-lg text-gray-300">Habits</h2>
			<button class="btn btn-sm "><Plus class="transition-all" /></button>
		</div>
		<div class="flex flex-col">
			<article class="rounded-md bg-gray-700 p-4 text-gray-400">Habit</article>
		</div>
	</div>
	<div class="w-4/12 rounded-md bg-gray-800 px-4 py-3 shadow">
		<div class="flex justify-between">
			<h2 class="pb-3 text-lg text-gray-300">Todo</h2>
			<button class="btn btn-sm " on:click={toggleForm}
				><Plus class="transition-all {opened ? '-rotate-45' : 'rotate-0'}" /></button
			>
		</div>
		<div class="flex flex-col">
			{#if opened}
				<CreateForm toggle={toggleForm} />
			{/if}
			{#each data.todos as todo}
				<Todo {todo} />
			{/each}
		</div>
	</div>
	<div class="w-3/12 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Completed</h2>
		<div class="flex flex-col">
			{#each data.completedTodos as todo}
				<Todo {todo} />
			{/each}
		</div>
	</div>
</main>
