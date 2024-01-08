<script lang="ts">
  // import { formatDate } from '$lib/utils';

  import Tags from '../../../components/Tags.svelte';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post">
  <div class="post__cover">
    <hgroup>
      <h1 class="post__heading">{data.meta.title}</h1>
      <!--      <p class="post__meta">Published at {data.meta.date}</p>-->
    </hgroup>
  </div>

  <div class="prose prose-invert">
    <div class="post__tags">
      {#if data.meta?.stack?.length > 0}
        <Tags items={data.meta.stack} />
      {/if}
    </div>
    <svelte:component this={data.content} />
  </div>
</article>

<style lang="postcss">
  .post__cover {
    @apply w-full sm:bg-gradient-to-t from-night from-25% to-neutral-800 h-28 border-neutral-800 sm:border-2 mb-6 sm:mb-12 relative;
  }

  .post__tags {
    @apply ml-4 float-right mb-3 w-1/4;
  }

  .post__heading {
    @apply text-4xl font-rocket sm:absolute sm:top-1/2 sm:-left-12 text-neutral-100;
  }
</style>
