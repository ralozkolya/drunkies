<main class="flex flex-col items-center justify-center">
	<!-- <h1 class="text-4xl mb-8">Track your alcohol intake</h1> -->
	<form method="post" action="/login" class="w-1/3">
		<label>
			Email:
			<input
				type="email"
				name="email"
				class="input input-bordered w-full my-4"
				placeholder="Enter your email"
				required
				autofocus
			/>
		</label>
		<div class="text-right">
			<button class="btn btn-neutral">Sign in</button>
		</div>
	</form>
</main>

<style>
	input:not(:focus):invalid {
		@apply border-error;
	}
</style>
