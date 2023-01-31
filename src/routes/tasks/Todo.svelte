<script lang="ts">
	import type { Todo } from '@prisma/client';
	import { slide } from 'svelte/transition';
	import { DotsVertical } from 'tabler-icons-svelte';
	import ActionMenu from './ActionMenu.svelte';
	import EditForm from './EditForm.svelte';
	import Tags from './Tags.svelte';
	import ToggleButton from './ToggleButton.svelte';

	export let todo: Todo;

	let actionVisible: boolean = false;
	let editable: boolean = false;

	let toggleActions = () => {
		actionVisible = !actionVisible;
	};

	let toggleEditable = () => {
		editable = !editable;
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
			<ActionMenu
				id={todo.id}
				onDelete={toggleActions}
				onEdit={() => {
					toggleEditable();
					toggleActions();
				}}
			/>
		{/if}
		{#if editable}
			<EditForm {todo} onSubmit={toggleEditable} />
		{:else}
			<ToggleButton {todo} />
		{/if}
	</div>

	{#if todo.tags}
		<Tags tags={todo.tags} />
	{/if}
</article>
