<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from '@supabase/supabase-js';
	import { getName } from '../util/name';

	export let user: User | null;
	const name = getName(user?.id as string);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<nav class="navbar bg-base-100 fixed z-10">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Drunkies</a>
	</div>
	<div class="hidden sm:flex flex-none">
		{#if user}
			<span class="capitalize px-4 text-sm">{name}</span>
			<a class="btn btn-ghost" href="/profile/log">Log</a>
			<form method="post" action="/?/logout" use:enhance>
				<button class="btn btn-ghost">Logout</button>
			</form>
		{:else}
			<a href="/" class="btn btn-ghost">Login</a>
		{/if}
	</div>
	{#if user}
		<div class="dropdown dropdown-end sm:hidden">
			<button class="btn m-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					></path></svg
				>
			</button>
			<div
				tabindex="0"
				class="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-52 text-lg"
			>
				<span class="capitalize p-4 text-sm">{name}</span>
				<ul>
					<li><a href="/profile/log">Log</a></li>
					<li>
						<form method="post" action="/?/logout" use:enhance>
							<button>Logout</button>
						</form>
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<a href="/" class="btn btn-ghost sm:hidden">Login</a>
	{/if}
</nav>
