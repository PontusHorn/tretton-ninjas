<script lang="ts">
  import LinkedInLogo from './icons/LinkedInLogo.svelte';
  import GithubLogo from './icons/GithubLogo.svelte';
  import StackOverflowLogo from './icons/StackOverflowLogo.svelte';
  import TwitterLogo from './icons/TwitterLogo.svelte';
  import type { Ninja } from './types';

  export let ninja: Ninja;
</script>

<style>
  div {
    display: flex;
    gap: 0.25rem;
  }

  a {
    color: var(--extraDarkGray);
    display: flex;
  }
</style>

<div>
  {#if ninja.linkedIn}
    <a href={`https://linkedin.com${ninja.linkedIn}`}>
      <LinkedInLogo />
    </a>
  {/if}
  {#if ninja.gitHub}
    <a href={`https://github.com/${ninja.gitHub}`}>
      <GithubLogo />
    </a>
  {/if}
  {#if ninja.stackOverflow}
    <a href={`https://stackoverflow.com/users/${ninja.stackOverflow}`}>
      <StackOverflowLogo />
    </a>
  {/if}
  {#if ninja.twitter}
    <a href={`https://twitter.com/${ninja.twitter}`}>
      <TwitterLogo />
    </a>
  {/if}
</div>
