<script lang="ts">
  import { onMount } from 'svelte';
  import * as Fancyapps from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';

  export let images: string[] = [];
  export let alt: string[] = [];
  export let className: string = 'columns-2 sm:columns-2';
  let gallery: HTMLElement = null;

  onMount(() => {
    if (alt.length < images.length) {
      console.error('the classes array must have the same length as images');
    }

    Fancyapps.Fancybox.bind(gallery, 'a', {});
  });
</script>

{#if images.length > 0}
  <div class="gap-4 my-8 {className}" bind:this={gallery}>
    {#each images as src, i}
      <div class="column relative mb-4">
        <a data-fancybox="gallery" href={src} title={alt[i]} data-caption={alt[i]}>
          <img {src} alt={alt[i]} />
        </a>
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">
  img {
    @apply w-full h-full object-cover rounded-md my-0;
  }
</style>
