<script>
  let name = 'Ilya';
  let surname = 'Mazunin';

  $: fullName = `${name} ${surname}`;
</script>

<h1>Hello, {fullName}</h1>
<button on:click={() => (surname = 'Kyubey')}> Change name </button>

<h1 class="heading">Hello world!</h1>

<style lang="postcss">
  .heading {
    @apply text-3xl font-bold underline text-red-600;
  }

  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
