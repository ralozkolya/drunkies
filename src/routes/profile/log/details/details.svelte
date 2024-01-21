<script lang="ts">
	import DetailsContent from './details-content.svelte';

	let detailsOpen = false;
</script>

<div class="collapse collapse-arrow bg-base-200 mt-8">
	<input type="checkbox" bind:checked={detailsOpen} />
	<div class="collapse-title text-xl font-medium">Show the complete log</div>
	<div class="collapse-content w-full max-w-full overflow-x-auto">
		{#if detailsOpen}
			<DetailsContent />
		{/if}
	</div>
</div>
