<script lang="ts">
  import '@/app.css';
  import '@fortawesome/fontawesome-svg-core/styles.css';
  import Header from '@/components/Header.svelte';
  import Footer from '@/components/Footer.svelte';
  import JobStatus from '@/components/JobStatus.svelte';
  import Container from '@/components/Container.svelte';
  import { onMount } from 'svelte';
  import { config } from '@fortawesome/fontawesome-svg-core';
  import { scale, fade, fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import Bouncer from '@/components/Bouncer.svelte';

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

  let windowWidth: number;
</script>

<Header />
<main class="main" bind:offsetWidth={windowWidth}>
  {#key data.url}
    <Container fluid={$page.data.wideLayout}>
      <div in:scale={{ duration: 400, delay: 205, start: 1.05 }} out:fade={{ duration: 200 }}>
        <slot />
      </div>
    </Container>
  {/key}
</main>
{#if windowWidth > 991}
  <Bouncer />
{/if}
{#if $page.url.pathname === '/'}
  <div class="top-bar" in:fly={{ y: -100, duration: 800 }} out:fly={{ y: -50, duration: 1200 }}>
    <JobStatus />
  </div>
{:else if footerShown}
  <Footer />
{/if}

<style lang="postcss">
  :global(body) {
    @apply antialiased bg-night text-white;
  }

  .top-bar {
    @apply fixed top-0 left-0 right-0;
  }
</style>
