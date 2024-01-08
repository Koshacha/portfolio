<script>
  import '../app.css';
  import { scale, fade, fly } from 'svelte/transition';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  import '@fortawesome/fontawesome-svg-core/styles.css';
  import { config } from '@fortawesome/fontawesome-svg-core';
  import { page } from '$app/stores';
  import JobStatus from '../components/JobStatus.svelte';
  config.autoAddCss = false;

  export let data;

  $: footerShown = false;
  onMount(() => {
    document.addEventListener('scroll', function () {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.body.scrollHeight;

      footerShown = currentScroll + window.innerHeight * 0.7 > height * 0.7;
    });
  });
</script>

<div class="container">
  <Header />
  <main class="main">
    {#key data.url}
      <div in:scale={{ duration: 400, delay: 200, start: 1.05 }} out:fade={{ duration: 200 }}>
        <slot />
      </div>
    {/key}
  </main>
  {#if $page.url.pathname === '/'}
    <div class="bottom-bar" in:fly={{ y: 200, duration: 1000 }}>
      <JobStatus />
    </div>
  {:else if footerShown}
    <Footer />
  {/if}
</div>

<style lang="postcss">
  :global(body) {
    @apply antialiased max-w-2xl mb-20 flex flex-col md:flex-row mx-4 mt-8 mx-auto bg-night text-white;
  }

  .container {
    @apply flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0;
  }

  .bottom-bar {
    @apply fixed bottom-0 left-0 right-0;
  }
</style>
