<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import random from 'lodash/random';
  import sample from 'lodash/sample';

  export let emoji: string[];

  let loaded = false;
  let count = 20;
  $: loop = new Array(count).keys()

  function anEmoji () {
    return sample(emoji);
  }
  
  setTimeout(() => (loaded = true), 0);
</script>

{#if loaded}
  <div class="cover" transition:fade>
    {#each loop as i}
      <div class="cover__emoji"
        style="opacity: {0.3 / ((i + 1) * 0.4)}; transform: rotate({random(-90, 90)}deg);" >
        <span>{anEmoji()}</span>
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">
  .cover {
    @apply absolute hidden md:flex flex-row-reverse flex-wrap items-center justify-center overflow-hidden left-0 top-0 bottom-0 right-0 pointer-events-none;
  }

  .cover__emoji {
    @apply text-4xl flex items-center justify-center h-16 w-16;
  }

  .cover__emoji :global(span) {
    @apply grayscale-[0.7];
  }
</style>