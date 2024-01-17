<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="flex-col">
	{#if form?.error}
		<h1 class="text-2xl text-error">Request failed</h1>
		<div class="mb-4 text-error">{form?.error}</div>
	{:else}
		<h1 class="text-2xl mb-8">An email has been sent for confirmation</h1>
	{/if}
	<a class="btn btn-neutral" href="/">Go back</a>
</main>
