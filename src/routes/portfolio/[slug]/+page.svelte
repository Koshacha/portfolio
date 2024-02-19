<script lang="ts">
  // import analyzeDate, { type DateInfo } from '$lib/utils/analyzeDate';
  
  import PostCoverEmoji from '../../../components/PostCoverEmoji.svelte'
  import Tags from '../../../components/Tags.svelte';

  export let data;

  $: formattedTitle = data.meta.title
    .split(' ')
    .map((o, i) => !i ? `<span>${o}</span>` : o)
    .join(' ');

  // let date: DateInfo | undefined = data.meta.date ? analyzeDate(data.meta.date) : undefined;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post">
  <div class="post__cover">
    {#if data.meta.emoji}
      <PostCoverEmoji emoji={data.meta.emoji} />
    {/if}
    <hgroup>
      <h1 class="post__heading">{@html formattedTitle}</h1>
      <!-- {#if date}
        <div class="post__date">
          <div class="post__year">{date.year}</div>
          <div class="post__season" title={date.season}>{date.seasonEmoji}</div>
        </div>
      {/if} -->
    </hgroup>
  </div>

  <div
    class="prose prose-invert prose-headings:font-rocket prose-headings:my-5 prose-a:text-reseda_green-600 prose-li:leading-tight max-w-full"
  >
    <div class="post__tags">
      {#if data.meta?.stack?.length > 0}
        <Tags items={data.meta.stack} />
      {/if}
    </div>
    <svelte:component this={data.content} />
  </div>
</article>

<style lang="postcss">
  .post {
    @apply relative;
  }

  .post__cover {
    @apply w-full sm:bg-gradient-to-tr from-neutral-900 from-25% to-neutral-800 sm:h-28 border-neutral-800 sm:border-[1px] mb-6 sm:mb-12 md:relative rounded-sm;
  }

  .post__tags {
    @apply ml-4 float-right mb-3 w-1/2 md:w-1/4;
  }

  .post__heading {
    @apply relative text-4xl font-rocket sm:absolute sm:top-1/2 lg:-left-12 text-neutral-100 sm:font-[100];
  }

  .post__heading :global(span) {
    @apply sm:text-cambridge_blue-600 sm:font-borel sm:font-bold sm:leading-none sm:relative sm:-top-1/2 sm:text-5xl sm:mr-1;
  }
</style>
