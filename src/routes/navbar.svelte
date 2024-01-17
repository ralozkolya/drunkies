<script lang="ts">
	import type { User } from '@supabase/supabase-js';

	export let user: User | null;
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Drunkies</a>
	</div>
	<div class="flex-none">
		{#if user}
			<a class="btn btn-ghost" href="/profile/log">Log</a>
			<form method="post" action="/?/logout">
				<button class="btn btn-ghost">Logout</button>
			</form>
		{:else}
			<a href="/" class="btn btn-ghost">Login</a>
		{/if}
	</div>
</div>
