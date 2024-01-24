<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let drink: Drink;

	const dispatch = createEventDispatcher();

	let clicked = false;
	let loading = false;

	const format = (date: string) => {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'short'
		}).format(new Date(date));
	};

	const confirm = async () => {
		if (clicked) {
			loading = true;
			try {
				await fetch('/profile/log/details', {
					method: 'delete',
					body: JSON.stringify({ id: drink.id }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			} catch (error) {
				console.error(error);
			}
			dispatch('deleted', { id: drink.id });
			return (loading = false);
		}

		clicked = true;
		setTimeout(() => (clicked = false), 2000);
	};
</script>

<tr>
	<td class="w-2/6">{drink.name}</td>
	<td class="w-1/6 text-right whitespace-nowrap">{drink.volume / 1000} l</td>
	<td class="w-1/6 text-right whitespace-nowrap">{drink.alcohol / 1000} l</td>
	<td class="w-1/6 text-right">{format(drink.created_at)}</td>
	<td class="w-1/6 text-right">
		<button
			class="btn btn-circle btn-xs"
			class:btn-ghost={!clicked}
			class:btn-warning={clicked}
			disabled={loading}
			on:click={confirm}
		>
			{#if loading}
				<span class="loading loading-spinner loading-xs" />
			{:else}
				<i
					class="fas fa-close text-error"
					class:text-error={!clicked}
					class:fa-close={!clicked}
					class:fa-exclamation={clicked}
				/>
			{/if}
		</button>
	</td>
</tr>
