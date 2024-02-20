<script lang="ts">
  import { onMount } from 'svelte';

  export let images: string[] = [];
  export let alt: string[] = [];
  export let className: string = 'columns-2 sm:columns-2';

  onMount(() => {
    if (alt.length < images.length) {
      console.error('the classes array must have the same length as images');
    }
  });
</script>

{#if images.length > 0}
  <div class="gap-4 my-8 {className}">
    {#each images as src, i}
      <div class="column relative mb-4">
        <img {src} alt={alt[i]} title={alt[i]} />
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">
  img {
    @apply w-full h-full object-cover rounded-md my-0;
  }
</style>
