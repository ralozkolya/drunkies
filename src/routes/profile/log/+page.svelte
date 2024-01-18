<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { getName } from '../../../util/name.js';
	import Table from './table.svelte';

	export let data;

	const log = data.log ?? [];

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
		<Table data={grouped[user]} username={user} owner={user === name} />
	{/each}
</main>
