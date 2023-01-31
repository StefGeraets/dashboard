<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { slide, fly, draw, scale } from 'svelte/transition';
	import { Check, DeviceFloppy, DotsVertical, Edit, Square, Trash, X } from 'tabler-icons-svelte';

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
		if (editable) {
			setTimeout(() => editField.focus(), 200);
		}
	};
</script>

<article
	class="group/card mb-4 w-full rounded-lg bg-gray-700 p-4 text-gray-200 shadow transition-opacity duration-500 last-of-type:mb-0"
	transition:slide|local
>
	<div class="relative flex items-center justify-between gap-4">
		{#if !editable}
			<div class="flex gap-0">
				<button
					class="mt-1 -ml-2 self-start rounded text-gray-500 transition-opacity duration-200 {actionVisible
						? 'text-gray-300'
						: ''} opacity-0 group-hover/card:opacity-100"
					on:click|preventDefault={toggleActions}
				>
					<div>
						<DotsVertical size="20" />
					</div>
				</button>
				<div class="cursor-default self-start whitespace-normal break-keep text-lg font-medium">
					{todo.title}
				</div>
			</div>
		{/if}
		{#if actionVisible}
			<div
				transition:fly={{ y: -10, duration: 250 }}
				class="leading-0 absolute left-0 top-7 z-10 flex w-32 flex-col gap-2 rounded-md bg-gray-800 p-2 shadow-lg"
			>
				<button
					type="submit"
					class="flex items-center gap-2 rounded p-1 hover:bg-gray-700"
					on:click={() => {
						toggleEditable();
						toggleActions();
					}}
				>
					<Edit size="24" /> Edit
				</button>

				<form
					method="POST"
					action="tasks?/delete"
					use:enhance
					on:submit={toggleActions}
					class="leading-0 flex"
				>
					<input type="hidden" name="todoId" value={todo.id} />
					<button
						type="submit"
						class="flex w-full items-center gap-2 rounded p-1 hover:bg-gray-700"
					>
						<Trash size="24" /> Delete
					</button>
				</form>
			</div>
		{/if}
		{#if editable}
			<form
				action="tasks?/edit"
				method="POST"
				use:enhance
				class="-mt-1 -mb-1 flex w-full justify-between"
				on:submit={toggleEditable}
			>
				<div class="flex select-none items-center gap-3">
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
		{:else}
			<form {action} method="POST" use:enhance class="self-start">
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
						<Check
							size="24"
							class="text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						/>
					{/if}
				</button>
			</form>
		{/if}
	</div>

	{#if todo.tags}
		<div class="ml-3 flex gap-2">
			{#each todo.tags as tag}
				<span
					class=" cursor-pointer whitespace-nowrap rounded-lg bg-blue-500/20 px-2 py-px text-xs font-bold text-blue-200 transition-all hover:brightness-125"
					>{tag.name}</span
				>
			{/each}
		</div>
	{/if}
</article>
