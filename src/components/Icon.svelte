<script lang="ts">
  import Image from './Image.svelte';
  import Pop from './Pop.svelte';

  export let title: string;
  export let src: string;

  let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="icon" on:mouseenter={() => (hovered = true)} on:mouseleave={() => (hovered = false)}>
  {#if hovered}
    <Pop>{title}</Pop>
  {/if}
  <Image class="icon__img {hovered ? 'icon__img__hovered' : ''}" alt={title} {src}>
    <div slot="suspense" class="icon__img--skeleton"></div>
  </Image>
</div>

<style lang="postcss">
  .icon {
    @apply p-2 border-2 border-neutral-800 rounded-md relative;
  }

  .icon :global(.icon__img) {
    @apply h-9 w-9 rounded-sm object-contain grayscale-[0.6];
  }

  .icon :global(.icon__img__hovered) {
    @apply grayscale-0;
  }

  .icon__img--skeleton {
    @apply h-9 w-9 bg-neutral-800 animate-pulse rounded-md;
  }
</style>
