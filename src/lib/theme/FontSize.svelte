<script>
  import { onMount } from 'svelte';

  let fontSize = 16; // Default font size in pixels

  onMount(() => {
    // This ensures the code runs only in the client-side environment
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
  });

  // Reactive statement inside onMount if you need to react to changes
  $: fontSize, updateFontSize();

  function updateFontSize() {
    if (typeof window !== 'undefined') { // Additional check for client-side execution
      document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
    }
  }
</script>

<div class="flex flex-col items-center space-y-4">
  <label for="font-size-slider" class="block text-sm font-medium text-gray-700">Adjust Font Size</label>
  <input
    id="font-size-slider"
    type="range"
    min="12"
    max="36"
    bind:value={fontSize}
    class="w-full"
    aria-labelledby="font-size-label">
  <div id="font-size-label" class="text-lg font-semibold">Font Size: {fontSize}px</div>
</div>
