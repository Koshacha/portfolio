<script lang="ts">
  import Portfolio from '../../components/Portfolio.svelte';
  import PortfolioItem from '../../components/PortfolioItem.svelte';
  import PortfolioFilter from '../../components/PortfolioFilter.svelte';
  import { flip } from 'svelte/animate';
  import cn from 'classnames';

  export let data;

  let { posts, categories } = data.data;
  let selected: string[] = [];

  let animate = true;

  $: {
    if (selected.length > 0) animate = false;
  }

  $: filteredPosts =
    selected.length > 0
      ? posts.filter((post) => {
          return post.categories.some((category) => {
            return selected.includes(category);
          });
        })
      : posts;
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<Portfolio>
  <PortfolioFilter items={categories} bind:selectedItems={selected} />

  <div class="portfolio">
    {#each filteredPosts as post, index (post.slug)}
      <div
        class={cn('portfolio__item', {
          'portfolio__item--wide': index < 2
        })}
        animate:flip={{ duration: 300 }}
      >
        <PortfolioItem {animate} {index} {post} />
      </div>
    {/each}
  </div>
</Portfolio>

<style lang="postcss">
  .portfolio {
    @apply flex flex-col w-full sm:grid sm:grid-cols-6 sm:gap-4;
  }

  .portfolio__item {
    @apply w-full mb-5 sm:mb-0 col-span-2;
  }

  .portfolio__item.portfolio__item--wide {
    @apply col-span-3;
  }
</style>
