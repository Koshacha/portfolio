<script lang="ts">
  import { fly } from 'svelte/transition';
  import cn from 'classnames';
  export let position: 'top' | 'bottom' = 'bottom';

  $: initialPosition = position === 'top' ? 10 : -10;
  $: className = position === 'top' ? 'pop--top' : 'pop--bottom';
</script>

<div class={cn('pop', className)} in:fly={{ y: initialPosition }}>
  <slot />
</div>

<style lang="postcss">
  .pop {
    @apply bg-neutral-800 p-1 px-3 border-[1px] border-neutral-700 rounded-md absolute left-1/2 -translate-x-1/2 w-fit text-center whitespace-nowrap max-w-md opacity-90 pointer-events-none z-10;
  }

  .pop--top {
    @apply bottom-[105%];
  }

  .pop--bottom {
    @apply top-[105%];
  }
</style>
