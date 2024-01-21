<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { getName } from '../../../util/name.js';
	import Details from './details/details.svelte';
	import Leaderboard from './leaderboard.svelte';
	import Table from './table.svelte';

	export let data;

	let loading: Promise<void>;

	$: log = data.log ?? [];

	$: grouped = log?.reduce((map, entry) => {
		map[getName(entry.user_id)] ??= [];
		map[getName(entry.user_id)].push(entry);
		return map;
	}, {});

	$: users = Object.keys(grouped).map((key) => ({ name: key, data: grouped[key] }));

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

	<div class="lg:grid grid-cols-[1fr_450px] gap-4 lg:gap-8">
		<div class="order-1 p-4 mb-8">
			<Leaderboard {users} />
		</div>
		<div class="order-0">
			{#each users as user}
				<Table data={user.data} username={user.name} owner={user.name === name} />
			{/each}
		</div>
	</div>

	<Details />
</main>
