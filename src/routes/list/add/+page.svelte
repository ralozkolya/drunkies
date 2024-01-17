<script lang="ts">
	import Error from './error.svelte';
	import Input from './input.svelte';

	export let data;
	export let form;

	const drink: Drink | null = data.drink;

	const icons: Icon[] = ['wine-glass', 'whiskey-glass', 'martini-glass-citrus', 'beer-mug-empty'];

	const previousValues = form?.data;
	const errors = form?.errors;

	let name = previousValues?.name ?? drink?.name ?? '';
	let alcohol = previousValues?.alcohol ?? drink?.alcohol ?? '';
	let volume = previousValues?.volume ?? drink?.volume ?? '';
	let icon = previousValues?.icon ?? drink?.icon ?? icons[0];

	let save: boolean = !drink;

	$: console.log(name, alcohol, volume);
</script>

<main>
	<form method="post" class="md:w-1/3 flex flex-col gap-4">
		<Input error={errors?.name} label="Name" name="name" bind:value={name} />
		<Input
			type="number"
			error={errors?.alcohol}
			label="Alcohol content (%)"
			name="alcohol"
			bind:value={alcohol}
		/>
		<Input
			type="number"
			error={errors?.volume}
			label="Volume (ml)"
			name="volume"
			bind:value={volume}
		/>
		<span class="cursor-pointer">Icon:</span>
		<div class="join w-full my-4">
			{#each icons as label}
				<button
					type="button"
					class="btn join-item flex-grow"
					class:btn-primary={label === icon}
					on:click={() => (icon = label)}
				>
					<i class="fas fa-{label} text-xl" />
				</button>
			{/each}
		</div>
		<Error message={errors?.icon} />
		<label class="inline-flex gap-4 items-center">
			<input type="checkbox" name="save" class="checkbox" bind:checked={save} />
			<span class="label-text">Save as template</span>
		</label>
		{#each icons as label}
			<input
				type="radio"
				name="icon"
				value={label}
				bind:group={icon}
				class="hidden"
				aria-label={label}
			/>
		{/each}
		<button class="btn btn-neutral w-full mt-4">Log</button>
	</form>
</main>
