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
