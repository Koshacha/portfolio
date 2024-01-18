<script lang="ts">
  import { page } from '$app/stores';

  let links = [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'portfolio',
      alternativeLabel: 'back to portfolio page',
      href: '/portfolio'
    },
    {
      label: '<span class="hidden sm:inline">competencies and </span>skills',
      href: '/competencies'
    }
  ];
</script>

<nav>
  <div class="menu">
    {#each links as { label, href, alternativeLabel }, index (index)}
      <a
        class="item"
        class:back={$page.url.pathname.startsWith(href) &&
          $page.url.pathname !== href &&
          alternativeLabel}
        class:active={$page.url.pathname === href}
        {href}
      >
        {#if alternativeLabel}
          {#if $page.url.pathname.startsWith(href) && $page.url.pathname !== href}
            {alternativeLabel}
          {:else}{label}{/if}
        {:else}
          {@html label}
        {/if}
      </a>
    {/each}
  </div>
</nav>

<style lang="postcss">
  .menu {
    @apply flex flex-row flex-wrap gap-4 my-3 mt-6 lg:mt-10 lg:mb-6;
  }

  .item {
    @apply transition-all py-2;

    &:before {
      @apply content-['#'] mr-0.5 text-tea_green align-middle;
    }
  }

  .active {
    @apply transition-all origin-left;
    &:before {
      @apply content-['!'] text-cambridge_blue align-baseline;
    }
  }

  .back {
    &:before {
      @apply content-['q:'] text-cambridge_blue align-baseline;
    }
  }
</style>
