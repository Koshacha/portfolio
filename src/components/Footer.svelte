<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faHeart as icon } from '@fortawesome/free-solid-svg-icons';
  import { fly } from 'svelte/transition';
  import Container from './Container.svelte';
</script>

<footer class="footer" in:fly={{ y: 50 }} out:fly={{ y: 50 }}>
  <Container>
    <div class="text">
      made with <FontAwesomeIcon class="text-[#ff6962] w-4 h-4" {icon} /> on
      <span></span> svelte
    </div>
  </Container>
</footer>

<style lang="postcss">
  .footer {
    @apply flex items-center justify-center mt-12 py-5 fixed bottom-0 left-0 right-0 pointer-events-none;
  }

  .text {
    @apply prose prose-invert align-middle bg-night-600 px-4 py-1 rounded-3xl;
  }
</style>
