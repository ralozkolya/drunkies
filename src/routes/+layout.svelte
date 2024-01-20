<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import Navbar from './navbar.svelte';

	export let data: LayoutData;
	const { user } = data;
</script>

<svelte:head>
	<title>Drunkies</title>
</svelte:head>

<Navbar {user} />

<slot />

<footer class="p-8 flex justify-center gap-8 text-sm">
	<a href="https://github.com/ralozkolya/drunkies" target="_blank" rel="noreferrer">
		<i class="fab fa-github" /> Source
	</a>
	<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
		<i class="fas fa-shield-halved" /> Privacy policy
	</a>
</footer>
