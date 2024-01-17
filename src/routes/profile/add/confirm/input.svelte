<script lang="ts">
	import Error from './error-message.svelte';

	export let name: string;
	export let error: string | undefined;
	export let value: string | number = '';
	export let label = name;
	export let placeholder = label;
	export let required = true;
	export let type: 'text' | 'number' = 'text';
</script>

<label>
	{label}:
	<input
		{...{ type }}
		{name}
		class="input input-bordered w-full my-4"
		class:border-error={error}
		{placeholder}
		bind:value
		on:input|once={() => (error = undefined)}
		{required}
	/>
	<Error message={error} />
</label>
