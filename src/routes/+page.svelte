<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Timeline from '$lib/Timeline.svelte';
	import TimelineItem from '$lib/TimelineItem.svelte';
	import ThemeSetting from '$lib/theme/ThemeSetting.svelte';
	import FontSetting from '$lib/theme/FontSetting.svelte';
	import FontSize from '$lib/theme/FontSize.svelte';
</script>


<div class="flex justify-center pt-8">
  <LightSwitch />
</div>

<div class="justify-center mx-32 my-16">
	<h3 class="flex justify-center text-2xl">Theme Style Setting</h3>
	<ThemeSetting />
</div>
<div class="justify-center mx-64 my-16">
	<h3 class="flex justify-center text-2xl">Font Setting</h3>
  <FontSetting />
</div>
<div class="justify-center mx-64 my-16">
	<h3 class="flex justify-center text-2xl">Font Size</h3>
  <FontSize />
</div>

		<div class="p-20">
		<Timeline>
			<TimelineItem
				title="Title 1"
				timestamp="January 1st, 2023"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
				badgeText="Latest"/>
			<TimelineItem
				title="Title 2"
				timestamp="December 1st, 2022"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
				badgeText=""/>
			<TimelineItem
				title="Title 3"
				timestamp="November 1st, 2022"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
				badgeText=""/>
			</Timeline>
	</div>
