<script lang="ts">
  import Icon from './Icon.svelte';

  export let items: {
    img: string;
    name: string;
  }[];
</script>

<div class="section">
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
    @apply relative h-full px-5 py-2 pb-5 bg-night-300/30 border-[1px] border-neutral-700 rounded-sm;
  }

  .section__title {
    @apply mb-2 text-lg font-bold text-neutral-300;
  }

  .section__content {
    @apply flex flex-wrap items-center gap-2;
  }

  .section__text {
    @apply mt-4 pt-4 text-sm border-t-[1px] border-night-600 border-dashed text-night-800;
  }
</style>
