<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { Post } from '$lib/types';
  import sample from 'lodash.sample';
  import { onMount } from 'svelte';
  export let post: Post | undefined = undefined;
  export let index = 0;
  export let animate = true;

  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, index * 60);
  });

  let loaded = !animate;
  let linkVariants = ['open', 'check', 'let`s see', 'checkout', 'go', 'read more'];
  $: linkText = sample(linkVariants);
</script>

{#if post && loaded}
  <div class="card__inner group noize" transition:fly={{ y: -20 }}>
    <div class="card__body">
      <div class="flex items-center -mt-1">
        <h3 class="card__title">{post.title}</h3>
      </div>
      <p class="card__description">
        {post.description}
      </p>

      {#if post.wip}
        <span class="card__button card__button--disabled" in:fly={{ y: 10 }}>
          currently in progress
        </span>
      {:else}
        <a href="/portfolio/{post.slug}" class="card__button" in:fly={{ y: 10 }}>
          {linkText}
        </a>
      {/if}
    </div>
  </div>
{/if}

<style lang="postcss">
  .card__body {
    @apply relative h-full p-5 bg-night-300/30 border-[1px] border-neutral-700 hover:border-celadon/50 rounded-sm;
  }

  .card__inner {
    @apply relative h-full ml-0 mr-0;
  }

  .card__title {
    @apply my-2 text-lg font-bold text-neutral-300;
  }

  .card__button {
    @apply absolute bottom-2 right-4 text-xs font-medium text-celadon font-rocket lg:opacity-0 group-hover:opacity-100 focus:opacity-100;
  }

  .card__button::before {
    @apply content-[''];
  }

  .card__button--disabled {
    @apply cursor-not-allowed text-reseda_green;
  }

  .card__button.card__button--mobile {
    @apply visible sm:hidden;
  }

  .card__description {
    @apply mb-2 text-neutral-500;
  }
</style>
