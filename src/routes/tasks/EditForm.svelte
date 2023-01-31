<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { onMount } from 'svelte';
	import { DeviceFloppy } from 'tabler-icons-svelte';

	export let onSubmit: () => void;
	export let todo: Todo;
	let editField: HTMLInputElement;

	onMount(() => {
		setTimeout(() => editField.focus(), 200);
	});
</script>

<form
	action="tasks?/edit"
	method="POST"
	use:enhance
	class="-mt-1 -mb-1 flex w-full justify-between gap-3"
	on:submit={onSubmit}
>
	<div class="flex w-full select-none items-center gap-3">
		<input type="hidden" name="todoId" value={todo.id} />

		<input
			type="text"
			bind:this={editField}
			name="todoTitle"
			value={todo.title}
			class="w-full rounded border-none bg-gray-700 p-0 py-1 pl-3 text-lg font-medium text-gray-200 focus:ring-sky-500"
		/>
	</div>
	<button
		type="submit"
		class="relative flex h-7 w-7 items-center justify-center text-gray-400 hover:text-sky-500"
		><DeviceFloppy size="38" strokeWidth="1.25" class="absolute -right-1.5 top-0" /></button
	>
</form>
