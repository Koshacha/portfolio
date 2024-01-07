<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { Post } from '$lib/types';
  import sample from 'lodash.sample';
  export let post: Post | undefined = undefined;
  export let type: 'small' | 'wide' = 'small';
  export let index = 0;

  setTimeout(() => {
    loaded = true;
  }, index * 125);

  let loaded = false;
  let hovered = false;
  let linkVariants = ['open', 'check', 'let`s see', 'checkout', 'go', 'read more'];
  $: linkText = sample(linkVariants);
  $: classname = type === 'small' ? 'card' : 'card card__wide';
</script>

{#if post && loaded}
  <div
    transition:fly={{ y: -20 }}
    class={classname}
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
  >
    <div class="card__inner">
      <div class="card__body">
        <div class="flex items-center -mt-1">
          <h3 class="card__title">{post.title}</h3>
        </div>
        <p class="card__description">
          {post.description}
        </p>
        <a
          href="portfolio/{post.slug}"
          class="card__button card__button--mobile"
          in:fly={{ y: 10 }}
        >
          {linkText}
        </a>
        {#if hovered}
          <a href="portfolio/{post.slug}" class="card__button" in:fly={{ y: 10 }}>
            {linkText}
          </a>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .card {
    @apply w-full mb-5 sm:mb-0 col-span-2;
  }

  .card.card__wide {
    @apply col-span-3;
  }

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
    @apply absolute bottom-2 right-4 text-xs font-medium text-celadon font-rocket invisible sm:visible;

    &:before {
      @apply content-['>'];
    }
  }

  .card__button.card__button--mobile {
    @apply visible sm:hidden;
  }

  .card__description {
    @apply mb-2 text-neutral-500;
  }
</style>
