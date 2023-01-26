<script lang="ts">
	import { onMount } from 'svelte';

	let time = new Date();

	const dateFormat = (opt: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-EN', opt);

	$: hours = ('0' + time.getHours()).slice(-2);
	$: minutes = ('0' + time.getMinutes()).slice(-2);
	$: seconds = time.getSeconds();
	$: day = time.getDate();
	$: dayOfTheWeek = dateFormat({ weekday: 'short' }).format(time.getDay());
	$: month = dateFormat({ month: 'short' }).format(time.getMonth());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<p
	class="cursor-pointer rounded-md px-2 py-1 text-sm tabular-nums hover:bg-gray-700 hover:text-gray-400"
>
	<span class="mr-1">{dayOfTheWeek} {day} {month}</span>
	<span>
		{hours}<span class="inline-block w-1 text-sky-500">{seconds % 2 === 0 ? ':' : ' '}</span
		>{minutes}
	</span>
</p>
