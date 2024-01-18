<script lang="ts">
	export let username: string;
	export let data: Entry[];
	export let owner = false;

	const totalAlcohol = data.reduce((a, b) => a + b.alcohol, 0);
	const ALCOHOL_DENSITY = 5.53;
</script>

<div class="overflow-x-scroll mb-4">
	<table class="table">
		<thead>
			<tr>
				<th colspan="3" class="text-xl capitalize" class:text-white={owner}>
					{username}
					{#if owner}
						(You)
					{/if}
				</th>
			</tr>
			<tr>
				<th class="w-2/5">Drink</th>
				<th class="w-1/5 text-right">Volume</th>
				<th class="w-1/5 text-right">Alcohol</th>
				<th class="w-1/5 text-right">Calories</th>
			</tr>
		</thead>
		<tbody>
			{#each data as entry}
				<tr>
					<td class="w-2/5">{entry.name}</td>
					<td class="w-1/5 text-right">{entry.volume / 1000} l</td>
					<td class="w-1/5 text-right">{entry.alcohol / 1000} l</td>
					<td class="w-1/5 text-right">{Math.round(entry.alcohol * ALCOHOL_DENSITY)} kcal</td>
				</tr>
			{/each}
			<tr>
				<td colspan="2" class="w-3/5 font-bold">Total</td>
				<td class="w-1/5 text-right font-bold">{totalAlcohol / 1000} l</td>
				<td class="w-1/5 text-right font-bold">{Math.round(totalAlcohol * ALCOHOL_DENSITY)} kcal</td
				>
			</tr>
		</tbody>
	</table>
</div>
