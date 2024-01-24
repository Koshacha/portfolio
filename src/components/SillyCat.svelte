<script>
  import Image from './Image.svelte';
</script>

<div class="silly-cat">
  <!-- <h4 class="silly-cat__title">today's cat of the day</h4> -->
  <Image class="silly-cat__gif" src="/maxwell-cat.webp" loading="lazy" alt="maxwell cat spinning">
    <div slot="suspense" class="silly-cat__gif--skeleton"></div>
  </Image>
</div>

<style type="postcss">
  .silly-cat {
    @apply flex items-center justify-center mt-20;
  }

  .silly-cat :global(.silly-cat__gif) {
    @apply max-w-52;
  }

  .silly-cat__gif--skeleton {
    @apply w-36 h-36 rounded-md bg-neutral-800 animate-pulse;
  }
</style>
