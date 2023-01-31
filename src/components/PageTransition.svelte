<script lang="ts">
	import { fly } from 'svelte/transition';

	export let key: string;
	export let duration: number = 300;
</script>

{#key key}
	<div in:fly={{ y: -25, duration, delay: duration + 300 }} out:fly={{ y: 25, duration }}>
		<slot />
	</div>
{/key}
