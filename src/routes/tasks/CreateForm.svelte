<script lang="ts">
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { DeviceFloppy } from 'tabler-icons-svelte';

	export let toggle: () => void;

	let newField: HTMLInputElement;

	onMount(() => {
		setTimeout(() => newField.focus(), 200);
	});
</script>

<form
	action="tasks?/create"
	method="POST"
	use:enhance
	transition:slide
	class="flex gap-2 pb-4"
	on:submit={toggle}
>
	<input
		type="text"
		name="title"
		id="title"
		bind:this={newField}
		placeholder="What is your task?"
		class="w-full rounded-lg border-none bg-gray-700 p-4 text-lg font-medium text-gray-100 shadow-md placeholder:text-gray-300 focus:ring-sky-500"
	/>
	<button
		type="submit"
		class="rounded-lg border border-gray-600 bg-gray-700/20 p-4 text-sky-500 transition-all hover:brightness-125 active:scale-95"
		><DeviceFloppy size="32" /></button
	>
</form>
