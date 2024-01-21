<script lang="ts">
  import Pop from './Pop.svelte';

  export let title: string;
  export let src: string;

  let hovered = false;
</script>

<div
  class="icon group"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  {#if hovered}
    <Pop>{title}</Pop>
  {/if}
  <img class="icon__img" alt={title} {src} />
</div>

<style lang="postcss">
  .icon {
    @apply p-2 border-2 border-neutral-800 rounded-md relative;
  }

  .icon__img {
    @apply h-9 w-9 object-contain grayscale-[0.6] group-hover:grayscale-0;
  }
</style>
