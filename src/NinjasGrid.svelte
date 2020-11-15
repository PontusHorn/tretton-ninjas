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

  let ninjasPromise: Promise<Ninja[]> = new Promise(() => {});
  let nameFilter: string = '';
  let officeFilter: Office;
  let sortMode: SortMode = 'name';

  onMount(() => {
    ninjasPromise = fetch(NINJAS_API_URL).then((response) => response.json());
  });

  $: ninjas = ninjasPromise.then((allNinjas) =>
    allNinjas
      .filter((ninja) => {
        if (
          nameFilter &&
          !ninja.name
            .toLocaleLowerCase()
            .includes(nameFilter.toLocaleLowerCase())
        ) {
          return false;
        }

        if (officeFilter && ninja.office !== officeFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => a[sortMode].localeCompare(b[sortMode]))
  );
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
      <label>Name:
        <input bind:value={nameFilter} data-test="NameFilter" /></label>
      <label>Office:
        <select bind:value={officeFilter} data-test="OfficeFilter">
          <option value={undefined}>Any office</option>
          {#each Object.values(Office) as office}
            <option value={office}>{office}</option>
          {/each}
        </select>
      </label>
      <label>Sort by:
        <select bind:value={sortMode} data-test="SortMode">
          {#each SORT_MODES as mode}
            <option value={mode.key}>{mode.name}</option>
          {/each}
        </select>
      </label>
    </div>
  </Paper>

  {#await ninjas}
    <div>Loading...</div>
  {:then ninjas}
    <div class="grid">
      {#each ninjas as ninja (ninja.email)}
        <NinjaCard {ninja} />
      {:else}
        <div>No matches :(</div>
      {/each}
    </div>
  {/await}
</main>
