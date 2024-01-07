<script>
  let strings = new Array(7).fill('currently looking for a job');
</script>

<div class="marque">
  <div class="marque__row">
    {#each strings as str}
      <span class="marque__item">{str}</span>
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
    @apply flex overflow-x-hidden bg-reseda_green fixed top-0 sm:top-[unset] sm:bottom-0 left-0;
  }

  .marque__row {
    @apply sm:py-5 animate-marquee whitespace-nowrap;
  }

  .marque__row--copy {
    @apply absolute top-0 sm:py-5 animate-marquee2 whitespace-nowrap;
  }

  .marque__item {
    @apply text-sm sm:text-4xl mx-5 font-rocket;
  }
</style>
