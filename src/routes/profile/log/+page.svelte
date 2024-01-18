<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { getName } from '../../../util/name.js';
	import Details from './details/details.svelte';
	import Table from './table.svelte';

	export let data;

	let loading: Promise<void>;

	$: log = data.log ?? [];

	$: grouped = log?.reduce((map, entry) => {
		map[getName(entry.user_id)] ??= [];
		map[getName(entry.user_id)].push(entry);
		return map;
	}, {});

	const name = getName(data.user?.id as string);
</script>

<main class="block container mx-auto">
	<div class="flex justify-between items-center mb-4 px-4">
		<h1 class="text-2xl font-bold">Log</h1>
		<button
			aria-label="reload"
			class="btn btn-neutral w-[50px]"
			on:click={() => (loading = invalidateAll())}
		>
			{#await loading}
				<span class="loading loading-spinner loading-xs" />
			{:then}
				<i class="fas fa-rotate-right" />
			{/await}
		</button>
	</div>

	{#if !log.length}
		<h2 class="text-xl text-center">Nothing here yet</h2>
	{/if}

	{#each Object.keys(grouped) as user}
		<Table data={grouped[user]} username={user} owner={user === name} />
	{/each}

	<Details />
</main>
