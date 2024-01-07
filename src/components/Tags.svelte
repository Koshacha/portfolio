<script lang="ts">
  import { fly } from 'svelte/transition';
  export let items: string[] = [];

  let tags = items.map((o) => {
    return o.replace('!', '');
  });

  let loaded = false;

  setTimeout(() => (loaded = true), 0);
</script>

<div class="tags">
  {#each tags as tag, index}
    {#if loaded}
      <span
        style="filter: brightness({1.3 - 0.1 * index});"
        in:fly={{ y: -100, delay: 250 * index, duration: 1000 }}
        class="tags__item">{tag}</span
      >
    {/if}
  {/each}
</div>

<style>
  .tags {
    @apply flex flex-col-reverse justify-center items-center;
  }

  .tags__item {
    @apply text-center leading-none flex items-center justify-center py-3 px-2 border-2 border-t-0 last:!border-t-2 border-reseda_green-600 bg-reseda_green w-full relative;
  }

  .tags__item::before,
  .tags__item::after {
    @apply content-[''] block h-4 w-5 absolute bottom-full bg-reseda_green border-2 border-reseda_green-600 border-b-0 rounded-sm rounded-b-[0px];
  }

  .tags__item::before {
    @apply left-1/4;
  }

  .tags__item::after {
    @apply right-1/4;
  }
</style>
