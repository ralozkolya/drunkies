<script lang="ts">
	import Drinks from './drinks.svelte';

	export let data;

	const predefined = data.drinks.filter((drink) => !drink.user_id);
	const custom = data.drinks.filter((drink) => drink.user_id);
	const regular = predefined.filter((drink) => drink.alcohol);
	const special = predefined.filter((drink) => !drink.alcohol);
</script>

<main class="flex-col gap-8">
	<h1 class="text-4xl">Choose a drink to log:</h1>
	<Drinks title="Predefined drinks" drinks={regular} />
	<Drinks title="Custom drinks" drinks={custom} showAddButton />
	{#if special.length}
		<Drinks title="Very special drinks for a very special boy" drinks={special} />
	{/if}
</main>
