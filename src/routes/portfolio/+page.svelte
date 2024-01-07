<script lang="ts">
  // import { t } from '$lib/translations';
  // import { formatDate } from '$lib/utils';
  import * as config from '$lib/config';
  import Portfolio from '../../components/Portfolio.svelte';
  import PortfolioItem from '../../components/PortfolioItem.svelte';
  import PortfolioFilter from '../../components/PortfolioFilter.svelte';

  export let data;

  let { posts, categories } = data.data;
  let selected: string[] = [];

  $: filteredPosts =
    selected.length > 0
      ? posts.filter((o) => {
          return o.categories.some((a) => {
            return selected.includes(a);
          });
        })
      : posts;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<Portfolio>
  <PortfolioFilter items={categories} bind:selectedItems={selected} />

  <div class="flex flex-col w-full sm:grid sm:grid-cols-6 sm:gap-4">
    {#each filteredPosts as post, index}
      <PortfolioItem type={index < 2 ? 'wide' : 'small'} {index} {post} />
    {/each}
  </div>
</Portfolio>
