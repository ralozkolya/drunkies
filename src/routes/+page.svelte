<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import ErrorMessage from './profile/add/confirm/error-message.svelte';

	export let form: ActionData;
</script>

<main class="flex flex-col items-center justify-center">
	<h1 class="text-4xl mb-8">Track your alcohol intake</h1>
	<form method="post" action="/?/login" class="md:w-1/3" use:enhance>
		<label>
			Email:
			<input
				type="email"
				name="email"
				class="input input-bordered w-full mt-4"
				placeholder="Enter your email"
				required
				autofocus
			/>
		</label>
		<ErrorMessage message={form?.error} />
		<button class="btn btn-neutral w-full mt-4">Sign in with Magic Link</button>
	</form>
</main>

<style>
	input:not(:focus):invalid {
		@apply border-error;
	}
</style>
