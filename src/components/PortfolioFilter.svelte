<script lang="ts">
  export let items: string[] = [];
  export let selectedItems: string[] = [];
</script>

<div class="filter">
  <button
    class="filter__item"
    class:active={selectedItems.length === 0}
    on:click={() => {
      selectedItems = [];
    }}
  >
    all
  </button>
  {#each items as item (item)}
    <button
      class="filter__item"
      class:active={selectedItems.includes(item)}
      on:click={() => {
        if (selectedItems.includes(item)) {
          selectedItems = selectedItems.filter((o) => o !== item);
        } else {
          selectedItems = [item];
        }
      }}
    >
      {item}
    </button>
  {/each}
</div>

<style lang="postcss">
  .filter {
    @apply flex flex-row flex-wrap gap-1 items-center justify-center mb-4;
  }

  .filter__item {
    @apply text-lg font-medium text-cambridge_blue font-rocket mr-2 last:mr-0 relative z-0;
  }

  .filter__item::before {
    @apply content-[''] absolute block bottom-full left-1/2 translate-y-1/2 bg-reseda_green h-1 w-0 rounded z-10 transition-all;
  }

  .filter__item.active {
    @apply text-reseda_green;
  }

  .filter__item.active::before {
    @apply w-1;
  }
</style>
