<script lang="ts">
	export let drinks: Drink[] = [];
	export let title: string;
	export let showAddButton = false;
</script>

{#if drinks.length || showAddButton}
	<h2 class="text-2xl">{title}</h2>
	<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
		{#each drinks as drink}
			<a href="/profile/add/confirm?drink={drink.id}">
				<i class="fas fa-{drink.icon}" />
				{drink.name}
			</a>
		{/each}
		{#if showAddButton}
			<a href="/profile/add/confirm" class="!btn-outline">
				<i class="fas fa-plus" />
				Add new
			</a>
		{/if}
	</div>
{/if}

<style>
	a {
		@apply btn btn-neutral btn-lg;
		@apply flex-col sm:gap-4 lg:gap-8;
		@apply w-[45vw] sm:w-[200px] aspect-[3/2] lg:aspect-[4/3] h-auto;
	}

	i {
		@apply text-2xl lg:text-4xl;
	}
</style>
