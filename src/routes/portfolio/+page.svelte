<script lang="ts">
  import Portfolio from '../../components/Portfolio.svelte';
  import PortfolioItem from '../../components/PortfolioItem.svelte';
  import PortfolioFilter from '../../components/PortfolioFilter.svelte';

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
      <PortfolioItem {animate} type={index < 2 ? 'wide' : 'small'} {index} {post} />
    {/each}
  </div>
</Portfolio>

<style lang="postcss">
  .portfolio {
    @apply flex flex-col w-full sm:grid sm:grid-cols-6 sm:gap-4;
  }
</style>
