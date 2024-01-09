<script lang="ts">
  const MSECONDS_IN_ONE_DAY = 86400000;
  const startDate = '2023-06-24T00:00:00.000Z';
  let currentDate = +new Date();
  let days = Math.round((currentDate - Date.parse(startDate)) / MSECONDS_IN_ONE_DAY);
</script>

<span class="combo">{days}</span>

<style lang="postcss">
  .combo {
    @apply font-rocket text-reseda_green;
  }
</style>
