<script lang="ts">
  import { scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  export let src: string;
  export let alt: string;

  let loaded = false;
  let failed = false;
  let loading = true;

  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;

    if (img.complete) {
      loading = false;
      loaded = true;
    } else {
      img.onload = () => {
        loading = false;
        loaded = true;
      };
      img.onerror = () => {
        loading = false;
        failed = true;
      };
    }
  });
</script>

{#if loaded}
  <img transition:scale={{ start: 0.7, duration: 500 }} {alt} {src} {...$$props} />
{:else if failed}
  <slot name="fallback" />
{:else if loading}
  <slot name="suspense" />
{/if}

<style lang="postcss">
  img {
    @apply w-full h-full max-w-full;
  }
</style>
