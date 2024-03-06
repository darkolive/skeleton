<!-- ./lib/theme/ThemeSetting.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';

  let value = 0; // Slider value initialized to 0
  let currentThemeName = ''; // Initialize as empty string

  // Array of themes corresponding to your Tailwind configuration
  const themes = ["skeleton", "wintry", "modern", "rocket", "sahara", "seafoam", "vintage", "crimson", "hamlindigo", "gold-nouveau"];
  const themeColors = [
    'rgb(15,186,129)', // skeleton
    'rgb(59,130,246)', // wintry
    'rgb(236,72,153)', // modern
    'rgb(6,182,212)', // rocket
    'rgb(236,170,54)', // sahara
    'rgb(134,208,203)', // seafoam
    'rgb(234,134,26)', // vintage
    'rgb(212,22,60)', // crimson
    'rgb(168,190,241)', // hamlindigo
    'rgb(116,74,161)', // gold-nouveau
    // Add more colors as needed
  ];

  $: {
    currentThemeName = themes[value]; // Update current theme name based on slider value
    if (typeof window !== 'undefined') { // Guard for client-side execution
      document.body.setAttribute('data-theme', currentThemeName);
    }
  }

  onMount(() => {
    // Ensure initial theme name is set after component mounts, guarding for client-side execution
    currentThemeName = themes[0];
  });
</script>
<div class="flex justify-center my-4">
  {#each themeColors as color}
    <div style="background-color: {color};width:10%" class="h-10" />
  {/each}
</div>
<div style="width:90%; margin-left:5%;">
<input type="range" min="0" max="9" bind:value={value} class="slider" /><br>
</div>
<h3 class="flex justify-center pt-4 text-lg font-semibold">Current Theme: {currentThemeName}</h3>

