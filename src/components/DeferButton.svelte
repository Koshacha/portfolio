<script lang="ts">
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  let state: 'init' | 'loading' | 'loaded' = 'init';

  function loadData() {
    state = 'loading';
    setTimeout(() => {
      state = 'loaded';
    }, 1000);
  }
</script>

{#if state === 'init'}
  <button class="button" on:click={loadData}>
    <FontAwesomeIcon class="text-reseda_green-600 !h-3 mr-1" icon={faLink} />get link
  </button>
{:else if state === 'loading'}
  <span class="button__skeleton"></span>
{:else}
  <slot />
{/if}

<style lang="postcss">
  .button {
    @apply text-reseda_green-600 inline-flex items-center my-0;
  }

  .button__skeleton {
    @apply inline-block h-4 w-20 bg-neutral-800 animate-pulse rounded-md my-0;
  }
</style>
