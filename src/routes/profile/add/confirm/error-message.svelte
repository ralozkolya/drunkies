<script lang="ts">
	export let message: string | undefined;
</script>

{#if message}
	<span class="text-error">{message}</span>
{/if}
