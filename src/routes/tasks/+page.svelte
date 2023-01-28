<script lang="ts">
	import { DotsVertical } from 'tabler-icons-svelte';

	let todos = [
		{ title: 'Water plants', id: 0, tags: [{ id: 0, name: 'Home', type: 'shore' }] },
		{
			title: 'Do Laundry',
			id: 1,
			repeat: true,
			repeatAmount: 3,
			repeatPeriod: 'Week',
			repeatCheckins: [
				{ checkinDate: '2023-01-27T10:37:36.197Z' },
				{ checkinDate: '2023-01-25T10:37:36.197Z' }
			],
			tags: [{ id: 0, name: 'Habit', type: 'habit' }],
			createdAt: '2023-01-28T10:37:36.197Z'
		},
		{
			title: 'Workout',
			id: 2,
			tags: [
				{ id: 1, name: 'Schutterij', type: 'organisation' },
				{ id: 1, name: 'Personal', type: 'personal' }
			]
		},
		{ title: 'Meditate', id: 3, completed: true }
	];
</script>

<main class="flex gap-6">
	<div class="w-2/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg uppercase tracking-wide text-gray-300">Habits</h2>
		<div class="flex flex-col gap-4" />
	</div>
	<div class="w-2/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Todo</h2>
		<div class="flex flex-col gap-4">
			{#each todos as todo}
				<article class="w-full rounded-lg bg-gray-700 p-4 text-gray-200 shadow">
					<div class="flex justify-between">
						<h4 class="text-lg font-medium">{todo.title}</h4>
						<button
							class="rounded p-1 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
							><DotsVertical size="20" /></button
						>
					</div>
					{#if todo.tags}
						<div class="flex gap-2">
							{#each todo.tags as tag}
								<span
									class="rounded-lg bg-fuchsia-300 px-1 py-px text-xs font-bold text-fuchsia-700"
									>{tag.name}</span
								>
							{/each}
						</div>
					{/if}

					{#if todo.repeat}
						<div class="mt-2 text-sm">
							{todo.repeatAmount} times a {todo.repeatPeriod}
						</div>

						<div class="flex gap-1">
							{#each Array(todo.repeatAmount) as checkin}
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="h-4 w-4 rounded   border-gray-600 bg-gray-600 text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
								/>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
	<div class="w-1/5 rounded-md bg-gray-800 px-4 py-3 shadow">
		<h2 class="pb-3 text-lg text-gray-300">Completed</h2>
	</div>
</main>
