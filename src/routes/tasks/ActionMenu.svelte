<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import { Edit, Trash } from 'tabler-icons-svelte';

	export let id: Number;
	export let onEdit: () => void;
	export let onDelete: () => void;
</script>

<div
	transition:fly={{ y: -10, duration: 250 }}
	class="leading-0 absolute left-0 top-7 z-10 flex w-32 flex-col gap-2 rounded-md bg-gray-800 p-2 shadow-lg"
>
	<button
		type="submit"
		class="flex items-center gap-2 rounded p-1 hover:bg-gray-700"
		on:click={onEdit}
	>
		<Edit size="24" /> Edit
	</button>

	<form
		method="POST"
		action="tasks?/delete"
		use:enhance
		on:submit={onDelete}
		class="leading-0 flex"
	>
		<input type="hidden" name="todoId" value={id} />
		<button type="submit" class="flex w-full items-center gap-2 rounded p-1 hover:bg-gray-700">
			<Trash size="24" /> Delete
		</button>
	</form>
</div>
