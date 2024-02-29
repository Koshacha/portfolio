<script lang="ts">
  import type { IconDefinition } from '@fortawesome/free-regular-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faLink } from '@fortawesome/free-solid-svg-icons';

  export let type: 'with-icon' | 'simple' = 'simple';
  export let text = '';
  export let href = '';
  export let event: string | undefined = undefined;
  export let icon: undefined | IconDefinition = undefined;
  export let download: boolean | string = false;

  $: classname = type === 'simple' ? 'button' : 'button_with-icon';
</script>

<a {href} {download} class={classname} data-umami-event={event}>
  {#if type === 'simple'}
    <FontAwesomeIcon class="text-neutral-300 w-6 !h-3" icon={icon ?? faLink} />
    {text}
  {:else}
    <FontAwesomeIcon class="w-4 !h-5 mr-1" {icon} />
  {/if}
</a>

<style lang="postcss">
  .button {
    @apply border border-neutral-700 bg-neutral-800 rounded p-1 pr-2 text-sm
    inline-flex items-center leading-4 text-neutral-100 no-underline font-gantari;
  }

  .button_with-icon {
    @apply transition-colors duration-300 mt-1;
  }
</style>
