<script>
  import Lead from '../components/Lead.svelte';
  import SillyCat from '../components/SillyCat.svelte';
  import * as config from '$lib/config';
  import Background from '../components/Background.svelte';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<Lead />

<Background />

<SillyCat />
