<script lang="ts">
	import Drinks from './drinks.svelte';

	export let data;

	const { drinks } = data;

	const predefined = drinks.filter((drink) => !drink.user_id);
	const custom = drinks.filter((drink) => drink.user_id);
</script>

<main class="flex-col gap-8">
	<h1 class="text-4xl">Choose a drink to log:</h1>
	<Drinks title="Predefined drinks" drinks={predefined} />
	<Drinks title="Custom drinks" drinks={custom} showAddButton />
</main>
