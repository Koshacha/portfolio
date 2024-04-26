<script lang="ts">
  import Icon from './Icon.svelte';

  export let gradientClass: string = 'bg-gradient-to-br';

  export let items: {
    img: string;
    name: string;
  }[];
</script>

<div class="section noize {gradientClass}">
  <div class="section__title">
    <slot name="title" />
  </div>
  <div class="section__content">
    {#each items as skill, index (index)}
      <Icon src={skill.img} title={skill.name} />
    {/each}
  </div>
  {#if $$slots.text}
    <div class="section__text prose prose-a:text-reseda_green-600">
      <slot name="text" />
    </div>
  {/if}
</div>

<style lang="postcss">
  .section {
    @apply relative h-full px-4 py-3 pb-5 from-night-300/80 from-50% to-night-300/20 border-[1px] border-neutral-500/20 rounded-sm;
  }

  .section__title {
    @apply mb-2 font-semibold text-neutral-300 leading-none;
  }

  /* .section__content {
    @apply flex flex-wrap items-center gap-2;
  } */

  .section__content {
    @apply grid grid-cols-auto gap-2 place-items-center;
  }

  .section__text {
    @apply mt-4 pt-4 text-sm border-t-[1px] border-night-600 border-dashed text-night-800;
  }
</style>
