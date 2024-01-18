<script lang="ts">
  import cn from 'classnames';
  export let fluid = false;
</script>

<div
  class={cn('wrapper', {
    'wrapper--fluid': fluid
  })}
>
  <slot />
</div>

<style lang="postcss">
  .wrapper {
    @apply container mx-auto;
  }

  .wrapper--fluid {
    @apply max-w-full;
  }
</style>
