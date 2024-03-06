<script lang="ts">
	export let title: string = '(Title)';
	export let timestamp: string = '(Timestamp)';
	export let description: string = '(Description)';
	export let badgeText: string = '(Badge)';
</script>

<li class="mb-10 ml-10">
	<!-- Slot: Icon -->
	<span class="absolute flex items-center justify-center w-6 h-6 variant-filled-primary rounded-full -left-3 ring-8 ring-surface-200-700-token">
		<slot name="icon">&hearts;</slot>
	</span>
	<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
		<span>{title}</span>
		{#if badgeText}
    <span class="badge variant-soft-primary">{badgeText}</span>
		{/if}
	</h3>
	<time class="block mb-2 ">Released on {timestamp}</time>
	<p class="mb-4 opacity-75">
		{description}
	</p>
	<!-- Slot: Default -->
	{#if $$slots.default}<div><slot /></div>{/if}
</li>