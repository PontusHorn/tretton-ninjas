<script lang="ts">
  import Paper from './Paper.svelte';
  import NinjaProfiles from './NinjaProfiles.svelte';
  import type { Ninja } from './types';

  export let ninja: Ninja;
</script>

<style>
  .content {
    padding: 1rem;
  }

  figure {
    align-items: center;
    border-radius: var(--slightlyRounded);
    display: flex;
    height: 200px;
    justify-content: center;
    margin: 0;
    text-align: center;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  .name,
  .office {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    font-size: var(--baseFontSize);
    font-weight: bold;
    margin: 0;
    min-height: 24px;
  }

  @media (min-width: 641px) {
    figure {
      margin-bottom: 1rem;
    }

    .details {
      display: grid;
      gap: 0 0.25rem;
      grid-template-areas:
        'name profiles'
        'office office';
      grid-template-columns: 1fr auto;
    }

    .name {
      grid-area: name;
    }

    .office {
      grid-area: office;
    }

    .profiles {
      grid-area: profiles;
    }
  }
</style>

<Paper>
  <div class="content">
    <figure>
      {#if ninja.imagePortraitUrl}
        <img
          src={ninja.imagePortraitUrl}
          alt={`Portrait of ${ninja.name}`}
          loading="lazy" />
      {/if}
    </figure>

    <div class="details">
      <h2 class="name">{ninja.name}</h2>
      <span class="office">Office: {ninja.office}</span>
      <div class="profiles">
        <NinjaProfiles {ninja} />
      </div>
    </div>
  </div>
</Paper>
