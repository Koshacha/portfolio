<script lang="ts">
  import * as defaultConfig from '$lib/config';
  export let title: string = defaultConfig.title;
  export let description: string = defaultConfig.description;
  export let lang: string = defaultConfig.lang;
  export let image: string = defaultConfig.image;
  export let type: string = 'website';

  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta http-equiv="content-language" content={lang} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:image" content={image} />
</svelte:head>
