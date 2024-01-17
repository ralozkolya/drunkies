<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { adjectives, animals, uniqueNamesGenerator, type Config } from 'unique-names-generator';

	export let data;

	const log = data.log ?? [];

	const name = (seed: string) => {
		const config: Config = {
			dictionaries: [adjectives, animals],
			length: 2,
			separator: ' ',
			seed
		};
		return uniqueNamesGenerator(config);
	};

	const grouped = log?.reduce((map, entry) => {
		map[name(entry.user_id)] ??= [];
		map[name(entry.user_id)].push(entry);
		return map;
	}, {});
</script>

<main class="block">
	<div class="flex justify-between items-center mb-4">
		<h1 class="text-2xl font-bold">Log</h1>
		<button aria-label="reload" class="btn btn-neutral" on:click={() => invalidateAll()}>
			<i class="fas fa-rotate-right" />
		</button>
	</div>

	{#each Object.keys(grouped) as user}
		<div class="overflow-x-scroll mb-4">
			<table class="table">
				<thead>
					<tr>
						<th colspan="3" class="text-xl capitalize">{user}</th>
					</tr>
					<tr>
						<th>Drink</th>
						<th>Volume</th>
						<th>Alcohol</th>
						<th>Calories</th>
					</tr>
				</thead>
				<tbody>
					{#each grouped[user] as entry}
						<tr>
							<td>{entry.name}</td>
							<td>{entry.volume / 1000} l</td>
							<td>{entry.alcohol / 1000} l</td>
							<td>{Math.round(entry.alcohol * 7)} kcal</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</main>
