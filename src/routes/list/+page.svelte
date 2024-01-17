<main class="flex items-center justify-center">
	<div class="flex flex-col gap-4">
		<div class="flex gap-4">
			<a href="/add?drink=beer">Beer</a>
			<a href="/add?drink=wine">Wine</a>
		</div>
		<div class="flex gap-4">
			<a href="/add?drink=cocktail">Cocktail</a>
			<a href="/add?drink=shot">Shot</a>
		</div>
	</div>
</main>

<style>
	a {
		@apply btn btn-neutral btn-lg;
		flex-basis: 45%;
		flex-shrink: 0;
		flex-grow: 1;
	}
</style>
