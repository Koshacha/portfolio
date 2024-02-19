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
        in:fly={{ y: -100, delay: 150 * index, duration: 700 }}
        class="tags__item">{tag}</span
      >
    {/if}
  {/each}
</div>

<style lang="postcss">
  .tags {
    @apply flex flex-col-reverse justify-center items-center;
  }

  .tags__item {
    @apply text-center leading-none flex items-center justify-center py-3 px-2 border-2 border-t-0 last:!border-t-2 border-reseda_green-600 bg-reseda_green w-full relative;
  }
</style>
