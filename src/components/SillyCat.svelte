<script>
  import sample from 'lodash.sample';
</script>

<div class="silly-cat">
  <!-- <h4 class="silly-cat__title">today's cat of the day</h4> -->
  <img class="silly-cat__gif" src="/maxwell-cat.gif" />
</div>

<style type="postcss">
  .silly-cat {
    @apply flex items-center justify-center mt-20;
  }

  .silly-cat__title {
    @apply relative;
  }

  .silly-cat__gif {
    @apply max-w-52;
  }
</style>
