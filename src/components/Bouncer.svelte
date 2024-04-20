<script lang="ts">
  import { onMount } from 'svelte';
  import getAllAncestors from '@/lib/utils/getAllAncestors';
  import cn from 'classnames';
  import { spring } from 'svelte/motion';

  let scale = spring(1);
  let hidden = true;

  let wWidth: number;
  let wHeight: number;

  let coords = spring(
    { x: 500, y: 250 },
    {
      stiffness: 0.1,
      damping: 0.5
    }
  );

  onMount(() => {
    coords.set({ x: wWidth / 2, y: wHeight / 2 });
  });
</script>

<svelte:window bind:innerWidth={wWidth} bind:innerHeight={wHeight} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:body
  on:mousemove={(e) => {
    coords.set({ x: e.clientX, y: e.clientY });
    hidden = false;
  }}
  on:mouseleave={(e) => (hidden = true)}
  on:mouseenter={(e) => (hidden = false)}
  on:mouseout={(e) => scale.set(1)}
  on:mouseover={(e) => {
    const { target } = e;
    if (target instanceof Element) {
      const ancestors = getAllAncestors(target);
      if (ancestors.some((el) => ['A', 'BUTTON'].includes(el.tagName))) {
        scale.set(1.8);
      }
    }
  }}
/>
<div
  class={cn('bouncer')}
  style="left: {$coords.x}px; top: {$coords.y}px; opacity: {hidden ? 0 : 1}; scale: {$scale};"
></div>

<style>
  .bouncer {
    @apply fixed size-10 bg-transparent rounded-full pointer-events-none transition-opacity backdrop-invert z-50;
    transform-origin: center;
    translate: -50% -50%;
    scale: 1;
  }

  @keyframes border-spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 90deg;
    }
  }
</style>
