<script>
  let fontValue = 0;
  const fonts = [
    'Lexend',
    'OpenDyslexic',
    'Arial',
    'Times New Roman',
    'Courier New'
  ];

  $: fontName = fonts[fontValue];
  $: document.body.style.fontFamily = fontName;
</script>

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

<div class="flex flex-col items-center">
  <input type="range" min="0" max="{fonts.length - 1}" bind:value={fontValue} class="w-full" aria-labelledby="font-range-label">
  <h3 id="font-range-label" class="pt-4 text-lg font-semibold">Selected Font: {fontName}</h3>
</div>
