<script>
  let strings = new Array(7).fill('currently looking for a job');
  let glitchedElementIndex = 3;
</script>

<div class="marque">
  <div class="marque__row">
    {#each strings as str, index}
      {#if index === glitchedElementIndex}
        <span class="marque__item glitch" data-text={str}>{str}</span>
      {:else}
        <span class="marque__item">{str}</span>
      {/if}
    {/each}
  </div>

  <div class="marque__row--copy">
    {#each strings as str}
      <span class="marque__item">{str}</span>
    {/each}
  </div>
</div>

<style>
  .marque {
    @apply flex overflow-x-hidden bg-reseda_green;
  }

  .marque__row {
    @apply md:py-5 animate-marquee whitespace-nowrap;
  }

  .marque__row--copy {
    @apply absolute top-0 md:py-5 animate-marquee2 whitespace-nowrap;
  }

  .marque__item {
    @apply text-sm md:text-4xl mx-5 font-rocket;
  }
</style>
