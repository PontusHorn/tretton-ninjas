<script lang="ts">
  import { onMount } from 'svelte';
  import NinjaCard from './NinjaCard.svelte';
  import type { Ninja } from './types';

  const NINJAS_API_URL = `https://api.tretton37.com/ninjas`;
  let ninjas: Ninja[] = [];

  onMount(async () => {
    const response = await fetch(NINJAS_API_URL);
    const body = await response.json();

    // Only use a few profiles to begin with for development
    ninjas = body.slice(0, 12);
  });
</script>

<style>
  .grid {
    display: grid;
    gap: 1rem;

    --cardMinWidth: 230px;
    grid-template-columns: repeat(auto-fit, minmax(var(--cardMinWidth), 1fr));
  }

  @media (max-width: 640px) {
    .grid {
      --cardMinWidth: 150px;
    }
  }
</style>

<div class="grid">
  {#each ninjas as ninja}
    <NinjaCard {ninja} />
  {:else}
    <p>Loading...</p>
  {/each}
</div>
