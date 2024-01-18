<script lang="ts">
	import { getCalories } from '../../../../util/cal';

	let detailsOpen = false;
	let data: Promise<Drink[]> = Promise.resolve([]);

	const retrieve = async () => {
		data = fetch('/profile/log/details').then((response) => response.json());
	};

	const format = (date: string) => {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'short'
		}).format(new Date(date));
	};

	$: {
		detailsOpen && retrieve();
	}
</script>

<div class="collapse collapse-arrow bg-base-200 mt-8">
	<input type="checkbox" bind:checked={detailsOpen} />
	<div class="collapse-title text-xl font-medium">Show the complete log</div>
	<div class="collapse-content w-full max-w-full overflow-x-auto">
		{#await data}
			<span class="loading loading-spinner" />
		{:then log}
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
					{#each log as entry}
						<tr>
							<td class="w-2/6">{entry.name}</td>
							<td class="w-1/6 text-right">{entry.volume / 1000} l</td>
							<td class="w-1/6 text-right">{entry.alcohol / 1000} l</td>
							<td class="w-1/6 text-right">{getCalories(entry.alcohol)} kcal</td>
							<td class="w-1/6 text-right">{format(entry.created_at)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/await}
	</div>
</div>
