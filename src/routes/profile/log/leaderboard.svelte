<script lang="ts">
	interface User {
		data: Entry[];
		name: string;
	}

	export let users: User[];

	$: sorted = users.slice().sort((a, b) => {
		const totalA = a.data.reduce((a, b) => a + b.alcohol, 0) || Infinity;
		const totalB = b.data.reduce((a, b) => a + b.alcohol, 0) || Infinity;
		return totalA - totalB;
	});
</script>

<h2 class="text-xl text-white font-bold mb-4">Leaderboard</h2>
<div class="items-end text-white hidden sm:flex">
	{#each sorted.slice(0, 3) as user, index}
		<div class={`flex-shrink-0 flex-grow basis-[33.33%] lo-${index}`}>
			<h3 class="text-center break-words capitalize mb-4 px-4">{user.name}</h3>
			<div
				class={`border border-white lh-${index} flex items-end border-b justify-center text-4xl font-bold pb-4`}
				class:border-l-0={index === 2}
				class:border-r-0={index === 1}
			>
				{index + 1}
			</div>
		</div>
	{/each}
</div>

{#each sorted.slice(0, 3) as user, index}
	<h4 class="text-white capitalize mb-2 sm:hidden">{index + 1}. {user.name}</h4>
{/each}

<h3 class="text-white text-lg mt-4">Honorable mention 🏅:</h3>
{#each sorted.slice(3) as user, index}
	<h4 class="text-white capitalize mb-2">{index + 4}. {user.name}</h4>
{/each}

<style>
	.lh-0 {
		height: 160px;
	}

	.lh-1 {
		height: 120px;
	}

	.lh-2 {
		height: 80px;
	}

	.lo-0 {
		order: 1;
	}

	.lo-1 {
		order: 0;
	}

	.lo-2 {
		order: 2;
	}
</style>
