<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { adjectives, animals, uniqueNamesGenerator, type Config } from 'unique-names-generator';

	export let data;

	const log = data.log ?? [];

	const getName = (seed: string) => {
		const config: Config = {
			dictionaries: [adjectives, animals],
			length: 2,
			separator: ' ',
			seed
		};
		return uniqueNamesGenerator(config);
	};

	const grouped = log?.reduce((map, entry) => {
		map[getName(entry.user_id)] ??= [];
		map[getName(entry.user_id)].push(entry);
		return map;
	}, {});

	const name = getName(data.user?.id as string);
</script>

<main class="block">
	<div class="flex justify-between items-center mb-4 px-4">
		<h1 class="text-2xl font-bold">Log</h1>
		<button aria-label="reload" class="btn btn-neutral" on:click={() => invalidateAll()}>
			<i class="fas fa-rotate-right" />
		</button>
	</div>

	{#if !log.length}
		<h2 class="text-xl text-center">Nothing here yet</h2>
	{/if}

	{#each Object.keys(grouped) as user}
		<div class="overflow-x-scroll mb-4">
			<table class="table">
				<thead>
					<tr>
						<th colspan="3" class="text-xl capitalize">
							{user}
							{#if user === name}
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
					{#each grouped[user] as entry}
						<tr>
							<td class="w-2/5">{entry.name}</td>
							<td class="w-1/5 text-right">{entry.volume / 1000} l</td>
							<td class="w-1/5 text-right">{entry.alcohol / 1000} l</td>
							<td class="w-1/5 text-right">{Math.round(entry.alcohol * 7)} kcal</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</main>
