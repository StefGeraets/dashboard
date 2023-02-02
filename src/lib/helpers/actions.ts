export const clickOutside = (node: HTMLElement): SvelteActionReturnType => {
	const handleClick = (event: MouseEvent) => {
		if (event.currentTarget) {
			if (event.currentTarget instanceof Node && !node.contains(event.currentTarget)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
