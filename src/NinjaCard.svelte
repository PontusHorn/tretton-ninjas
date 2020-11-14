<script lang="ts">
  import Paper from './Paper.svelte';
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
    margin: 0 0 1rem 0;
    text-align: center;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  h2 {
    font-size: var(--baseFontSize);
    font-weight: bold;
    margin: 0;
  }
</style>

<Paper>
  <div class="content">
    <figure>
      {#if ninja.imagePortraitUrl}
        <img src={ninja.imagePortraitUrl} alt={`Portrait of ${ninja.name}`} />
      {/if}
    </figure>

    <h2>{ninja.name}</h2>
  </div>
</Paper>
