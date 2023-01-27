<script lang="ts">
	import { DotsVertical } from 'tabler-icons-svelte';

	let tasks = [
		{ title: 'Water plants', id: 0 },
		{ title: 'Do Laundry', id: 0 },
		{ title: 'Workout', id: 0 },
		{ title: 'Meditate', id: 0 }
	];
</script>

<main class="flex gap-6">
	<div class="w-2/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg uppercase tracking-wide text-gray-300">Habits</h2>
		<div class="flex flex-col gap-4">
			{#each tasks as task}
				<article class="w-full rounded-lg bg-gray-700 p-4 text-gray-200 shadow">
					<div class="flex justify-between">
						<h4 class="text-lg font-medium">{task.title}</h4>
						<button
							class="rounded p-1 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
							><DotsVertical size="20" /></button
						>
					</div>
					<div class="flex gap-2">
						<span class="rounded-lg bg-fuchsia-300 px-1 py-px text-xs font-bold text-fuchsia-700"
							>home</span
						>
					</div>
				</article>
			{/each}
		</div>
	</div>
	<div class="w-2/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Todo</h2>
	</div>
	<div class="w-1/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Completed</h2>
	</div>
</main>
