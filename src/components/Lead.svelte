<script>
  import Contacts from './Contacts.svelte';
  import Duolingo from './Duolingo.svelte';
</script>

<div class="lead">
  <p class="subtitle">JavaScript Developer</p>
  <h2 class="title">Ilya Mazunin</h2>
  <p class="text">
    Hey there, let's team up to build awesome apps together! I'm eager to become a player in your
    venture, bringing my expertise to the table. I love cats and absolutely adore TypeScript.
  </p>
  <p class="text">
    My eternal mojo is is neat code and
    <a class="link" href="https://nohello.net" rel="nofollow">nohello 🤓</a> in work chats, I hope you're
    following it too. Feel free to contact me so we can discuss your project as soon as possible.
  </p>
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
    @apply bg-gradient-to-br from-cambridge_blue-400 to-cambridge_blue-200 bg-clip-text text-transparent text-3xl font-bold
     sm:text-5xl sm:leading-none tracking-normal font-borel py-7 pb-4 sm:mb-0 relative lg:-left-10;
  }

  .text {
    @apply text-neutral-300/90 leading-6 font-sans mb-3;
  }

  .link {
    @apply text-cambridge_blue-400 font-borel leading-none;
  }
</style>
