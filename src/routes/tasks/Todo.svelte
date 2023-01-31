<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { slide, fly } from 'svelte/transition';
	import {
		Check,
		DeviceFloppy,
		DotsVertical,
		Edit,
		Square,
		Tag,
		Trash,
		X
	} from 'tabler-icons-svelte';

	export let todo: Todo;
	export let action: string;

	let actionVisible: boolean = false;
	let editable: boolean = false;
	let editField: HTMLInputElement;

	let toggleActions = () => {
		actionVisible = !actionVisible;
	};

	let toggleEditable = () => {
		editable = !editable;
		setTimeout(() => editField.focus(), 200);
	};
</script>

<article
	class="group mb-4 w-full space-y-1.5 rounded-lg bg-gray-700 p-4 text-gray-200 shadow last-of-type:mb-0"
	transition:slide
>
	<div class="relative flex justify-between">
		{#if editable}
			<form
				action="tasks?/edit"
				method="POST"
				use:enhance
				class="flex w-full justify-between"
				on:submit={toggleEditable}
			>
				<div class="flex select-none items-center gap-3">
					<input type="hidden" name="todoId" value={todo.id} />
					{#if todo.completed}
						<Check class="text-sky-500" />
					{:else}
						<Square class="text-gray-500" />
					{/if}
					<input
						type="text"
						bind:this={editField}
						name="todoTitle"
						value={todo.title}
						class="border-none bg-gray-700 p-0 text-lg font-medium text-gray-200"
					/>
				</div>
				<button type="submit" class="flex h-7 w-7 items-center justify-center"
					><DeviceFloppy size="20" /></button
				>
			</form>
		{:else}
			<form {action} method="POST" use:enhance>
				<button
					class="flex cursor-pointer select-none items-start justify-start gap-3 text-start"
					type="submit"
				>
					<input type="hidden" name="todoId" value={todo.id} />
					{#if todo.completed}
						<Check class="mt-0.5 w-6 shrink-0 text-sky-500" />
					{:else}
						<Square class=" mt-0.5 w-6 shrink-0 text-gray-500" />
					{/if}
					<div class="self-start whitespace-normal break-keep text-lg font-medium">
						{todo.title}
					</div>
				</button>
			</form>
		{/if}
		{#if !editable}
			<button
				class="h-7 w-7 rounded p-1 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
				class:active={actionVisible}
				on:click|preventDefault={toggleActions}
			>
				<div>
					{#if actionVisible}
						<X size="20" />
					{:else}
						<DotsVertical size="20" />
					{/if}
				</div>
			</button>
		{/if}
		{#if actionVisible}
			<div
				transition:fly={{ x: 20, duration: 150 }}
				class="leading-0 absolute right-7 top-0 flex h-7 items-center rounded-l bg-gray-800 p-0"
			>
				<form
					method="POST"
					action="tasks?/delete"
					use:enhance
					on:submit={toggleActions}
					class="leading-0"
				>
					<input type="hidden" name="todoId" value={todo.id} />
					<button type="submit" class="flex h-7 w-7 items-center justify-center">
						<Trash size="20" />
					</button>
				</form>

				<button
					type="submit"
					class="flex h-7 w-7 items-center justify-center"
					on:click={() => {
						toggleEditable();
						toggleActions();
					}}
				>
					<Edit size="20" />
				</button>
			</div>
		{/if}
	</div>

	{#if todo.tags}
		<div class="flex gap-2">
			{#each todo.tags as tag}
				<span
					class=" cursor-pointer whitespace-nowrap rounded-lg bg-blue-500/20 px-2 py-px text-xs font-bold text-blue-200 transition-all hover:brightness-125"
					>{tag.name}</span
				>
			{/each}
		</div>
	{/if}
</article>

<style>
	.active {
		@apply rounded-l-none bg-gray-800 text-gray-300;
	}
</style>
