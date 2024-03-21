<script lang="ts">
	import { getDate } from '../../../../util/date';
	import Error from './error-message.svelte';

	export let name: string;
	export let error: string | undefined;
	export let value: string | number | Date = '';
	export let label = name;
	export let placeholder = label;
	export let required = true;
	export let step = 1;
	export let type: 'text' | 'number' | 'date' = 'text';

	if (value instanceof Date) {
		value = getDate(value);
	}
</script>

<label>
	{label}:
	<input
		{...{ type }}
		{name}
		class="input input-bordered w-full my-4"
		class:border-error={error}
		max={'date' === type ? getDate() : null}
		{placeholder}
		{step}
		bind:value
		on:input={() => (error = undefined)}
		{required}
	/>
	<Error message={error} />
</label>
