<script lang="ts">
  let background: Array<[years: string, position: string, org?: string]> = [
    ['2020 – Present', 'Freelancer'],
    ['2018 – 2020', 'Webmaster', 'Cetera Labs'],
    [
      '2013 – 2017',
      "Bachelor's,  Informatics and Computer Engineering",
      'Siberian State University of Telecommunications and Informatics'
    ]
  ];
</script>

<section class="background">
  <h2 class="background__title">Background</h2>
  {#each background as [years, position, org]}
    <div class="job">
      <div class="job__years">{years}</div>
      <div class="job__desc">
        {#if org}
          <div class="job__title">{org}</div>
          {position}
        {:else}
          <span class="job__desc-inner">{position}</span>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  .background {
    @apply my-8;
  }

  .background__title {
    @apply text-2xl text-cambridge_blue-400 mb-5 font-rocket;
  }

  .job {
    @apply lg:flex items-center justify-between mb-4;
  }

  .job__years {
    @apply text-neutral-600 text-lg font-light flex-shrink-0 lg:ml-2 lg:order-1;
  }

  .job__title {
    @apply mb-1 text-lg text-neutral-300 font-bold;
  }

  .job__desc-inner {
    @apply text-neutral-300 font-semibold;
  }

  .job__desc {
    @apply text-neutral-500;
  }
</style>
