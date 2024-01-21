<script lang="ts">
	interface User {
		data: Entry[];
		name: string;
	}

	export let users: User[];

	$: sorted = users.slice().sort((a, b) => {
		const totalA = a.data.reduce((a, b) => a + b.alcohol, 0);
		const totalB = b.data.reduce((a, b) => a + b.alcohol, 0);
		return totalA - totalB;
	});

	const getOrder = (index: number) => {
		if (!index) return 'order-1';

		return `order-${index - 1}`;
	};
</script>

<h2 class="text-xl text-white font-bold mb-4">Leaderboard</h2>
<div class="flex items-end text-white">
	{#each sorted.slice(0, 3) as user, index}
		<div class={`flex-shrink-0 flex-grow basis-[33.33%] ${getOrder(index)}`}>
			<h3 class="text-2xl text-center break-words capitalize mb-4 px-4">{user.name}</h3>
			<div
				class={`border border-white h-${
					(3 - index) * 12
				} flex items-end border-b justify-center text-4xl font-bold pb-1`}
				class:border-l-0={index === 2}
				class:border-r-0={index === 1}
			>
				{index + 1}
			</div>
		</div>
	{/each}
</div>

<h3 class="text-white text-lg mt-4">Honorable mention 🏅:</h3>
{#each sorted.slice(3) as user, index}
	<h4 class="text-white capitalize">{index + 4}. {user.name}</h4>
{/each}
