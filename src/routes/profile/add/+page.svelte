<script lang="ts">
	import Drinks from './drinks.svelte';

	export let data;

	const drinks = data.drinks.filter((drink) => 8 !== drink.id);
	const cola = data.drinks.find((drink) => 8 === drink.id);

	const predefined = drinks.filter((drink) => !drink.user_id);
	const custom = drinks.filter((drink) => drink.user_id);
</script>

<main class="flex-col gap-8">
	<h1 class="text-4xl">Choose a drink to log:</h1>
	<Drinks title="Predefined drinks" drinks={predefined} />
	<Drinks title="Custom drinks" drinks={custom} showAddButton />
	{#if cola}
		<Drinks title="Very special drinks for a very special boy" drinks={[cola]} />
	{/if}
</main>
