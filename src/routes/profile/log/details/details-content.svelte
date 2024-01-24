<script lang="ts">
	import { onMount } from 'svelte';
	import Row from './row.svelte';

	let page = 1;
	let data: Drink[] = [];
	let loading = false;
	let finished = false;

	const retrieve = async (page = 1, complete = false) => {
		loading = true;
		try {
			const params = new URLSearchParams({ page: String(page) });
			if (complete) params.append('complete', '1');

			const response = await fetch(`/profile/log/details?${params}`);
			const { data: parsed, perPage } = await response.json();
			data = [...(complete ? [] : data), ...parsed];
			finished = perPage !== parsed.length;
		} catch (error) {
			console.error(error);
		}
		loading = false;
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
			<th class="w-1/6 text-right">Date</th>
			<th class="w-1/6 text-right">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data as drink}
			<Row on:deleted={() => retrieve(page, true)} {drink} />
		{/each}
	</tbody>
</table>
{#if loading}
	<div class="text-center">
		<span class="loading loading-spinner" />
	</div>
{/if}
