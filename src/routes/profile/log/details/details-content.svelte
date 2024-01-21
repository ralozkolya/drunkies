<script lang="ts">
	import { onMount } from 'svelte';
	import { getCalories } from '../../../../util/cal';

	let page = 1;
	let data: Drink[] = [];
	let loading = false;
	let finished = false;

	const retrieve = async (page = 1) => {
		loading = true;
		try {
			const response = await fetch(`/profile/log/details?page=${page}`);
			const { data: parsed, perPage } = await response.json();
			data = [...data, ...parsed];
			finished = perPage !== parsed.length;
		} catch (error) {
			console.error(error);
		}
		loading = false;
	};

	const format = (date: string) => {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'short'
		}).format(new Date(date));
	};

	onMount(() => {
		const onScroll = () => {
			if (loading || finished) return;
			const box = document.body.getBoundingClientRect();
			if (window.scrollY + window.innerHeight > box.height - 50) {
				retrieve(++page);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		retrieve(page);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<table class="table">
	<thead>
		<tr>
			<th class="w-2/6">Drink</th>
			<th class="w-1/6 text-right">Volume</th>
			<th class="w-1/6 text-right">Alcohol</th>
			<th class="w-1/6 text-right">Calories</th>
			<th class="w-1/6 text-right">Date</th>
		</tr>
	</thead>
	<tbody>
		{#each data as entry}
			<tr>
				<td class="w-2/6">{entry.name}</td>
				<td class="w-1/6 text-right">{entry.volume / 1000} l</td>
				<td class="w-1/6 text-right">{entry.alcohol / 1000} l</td>
				<td class="w-1/6 text-right">{getCalories(entry.alcohol)} kcal</td>
				<td class="w-1/6 text-right">{format(entry.created_at)}</td>
			</tr>
		{/each}
	</tbody>
	{#if loading}
		<span class="loading loading-spinner" />
	{/if}
</table>
