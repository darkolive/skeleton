<script>
  import { onMount } from 'svelte';

  let fontValue = 0;
  const fonts = [
    'Lexend',
    'OpenDyslexic',
    'Arial',
    'Times New Roman',
    'Courier New'
  ];

  let fontSize = 16; // Default font size in pixels

  // Reactive statements to handle font family changes
  let fontName = fonts[fontValue];

  onMount(() => {
    // Ensure these functions are only called client-side
    updateFontFamily();
    updateFontSize();
  });

  $: fontValue, updateFontFamilySafe();
  $: fontSize, updateFontSizeSafe();

  function updateFontFamilySafe() {
    if (typeof window !== 'undefined') { // Check for client-side execution
      updateFontFamily();
    }
  }

  function updateFontFamily() {
    document.body.style.fontFamily = fonts[fontValue];
  }

  function updateFontSizeSafe() {
    if (typeof window !== 'undefined') { // Check for client-side execution
      updateFontSize();
    }
  }

  function updateFontSize() {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
  }
</script>


<div class="flex flex-col items-center space-y-4">
  <div class="flex my-4 overflow-x-auto w-full">
    <div class="flex justify-between w-full mx-2">
      {#each fonts as font, index}
        <button 
          class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          style="font-family: {font};"
          on:click={() => fontValue = index}
          aria-label={`Select font ${font}`}>
          {font}
        </button>
      {/each}
    </div>
  </div>

  <input type="range" min="0" max="{fonts.length - 1}" bind:value={fontValue} class="w-full" aria-labelledby="font-range-label">
  <h3 id="font-range-label" class="pt-4 text-lg font-semibold">Selected Font: {fontName}</h3>

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
