<script lang="ts">
	import { rounded } from '../../../util/number';

	export let username: string;
	export let data: Entry[];
	export let owner = false;

	$: totalAlcohol = data.reduce((a, b) => a + b.alcohol, 0);
</script>

<div class="overflow-x-auto mb-4">
	<table class="table">
		<thead>
			<tr>
				<th colspan="3" class="text-xl capitalize text-white">
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
			</tr>
		</thead>
		<tbody>
			{#each data as entry}
				<tr>
					<td class="w-2/5">{entry.name}</td>
					<td class="w-1/5 text-right whitespace-nowrap">{entry.volume / 1000} l</td>
					<td class="w-1/5 text-right whitespace-nowrap">{rounded(entry.alcohol / 1000)} l</td>
				</tr>
			{/each}
			<tr>
				<td colspan="2" class="w-3/5 font-bold">Total</td>
				<td class="w-1/5 text-right font-bold">{rounded(totalAlcohol / 1000)} l</td>
			</tr>
		</tbody>
	</table>
</div>
