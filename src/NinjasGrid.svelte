<script lang="ts">
  import { onMount } from 'svelte';
  import NinjaCard from './NinjaCard.svelte';
  import Paper from './Paper.svelte';
  import { Office } from './types';
  import type { Ninja } from './types';

  type SortMode = keyof Pick<Ninja, 'name' | 'office'>;

  const NINJAS_API_URL = `https://api.tretton37.com/ninjas`;
  const SORT_MODES: { key: SortMode; name: string }[] = [
    { key: 'name', name: 'Name' },
    { key: 'office', name: 'Office' },
  ];

  let ninjas: Ninja[] = [];
  let nameFilter: string = '';
  let officeFilter: Office;
  let sortMode: SortMode = 'name';

  onMount(async () => {
    const response = await fetch(NINJAS_API_URL);
    ninjas = await response.json();
  });

  $: filteredNinjas = ninjas
    .filter((ninja) => {
      if (
        nameFilter &&
        !ninja.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
      ) {
        return false;
      }

      if (officeFilter && ninja.office !== officeFilter) {
        return false;
      }

      return true;
    })
    .sort((a, b) => a[sortMode].localeCompare(b[sortMode]));
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .filters {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
  }

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

<main>
  <Paper>
    <div class="filters">
      <label>Name: <input bind:value={nameFilter} /></label>
      <label>Office:
        <select bind:value={officeFilter}>
          <option value={undefined}>Any office</option>
          {#each Object.values(Office) as office}
            <option value={office}>{office}</option>
          {/each}
        </select>
      </label>
      <label>Sort by:
        <select bind:value={sortMode}>
          {#each SORT_MODES as mode}
            <option value={mode.key}>{mode.name}</option>
          {/each}
        </select>
      </label>
    </div>
  </Paper>

  <div class="grid">
    {#each filteredNinjas as ninja (ninja.email)}
      <NinjaCard {ninja} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</main>
