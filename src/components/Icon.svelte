<script lang="ts">
  import Image from './Image.svelte';
  import Pop from './Pop.svelte';

  export let title: string;
  export let src: string;

  let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="icon group"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  {#if hovered}
    <Pop>{title}</Pop>
  {/if}
  <Image class="icon__img" alt={title} {src}>
    <div slot="suspense" class="icon__img--skeleton"></div>
  </Image>
</div>

<style lang="postcss">
  .icon {
    @apply p-2 border-2 border-neutral-800 rounded-md relative;
  }

  .icon :global(.icon__img) {
    @apply h-9 w-9 object-contain grayscale-[0.6] group-hover:grayscale-0;
  }

  .icon__img--skeleton {
    @apply h-9 w-9 bg-neutral-800 animate-pulse rounded-md;
  }
</style>
