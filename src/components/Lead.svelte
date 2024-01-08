<script>
  import Contacts from './Contacts.svelte';
</script>

<div class="lead">
  <p class="subtitle">JavaScript Developer</p>
  <h2 class="title">ilya mazunin</h2>
  <p class="text">
    Hey there, let's team up to build awesome apps together! I'm eager to become a player in your
    venture, bringing my expertise to the table. I look forward to fruitful cooperation.
  </p>
  <p class="text">Contact me so we can discuss your project as soon as possible.</p>
  <Contacts />
</div>

<style lang="postcss">
  .lead {
    @apply mt-2;
  }

  .subtitle {
    @apply mb-2 text-xs font-semibold tracking-wide uppercase font-sans;
  }

  .title {
    @apply bg-gradient-to-br from-cambridge_blue-400 to-cambridge_blue-700 bg-clip-text text-transparent mb-5 text-3xl font-bold
     sm:text-5xl sm:leading-none font-rocket tracking-normal;
  }

  .text {
    @apply text-neutral-300/90 leading-6 font-sans mb-3;
  }
</style>
