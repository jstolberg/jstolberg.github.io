<script lang='ts'>
  import { tick, onMount } from 'svelte';
  import MenuButton from '$lib/MenuButton.svelte';

  let { windowWidth } = $props();

  let buttons = [
      {name: 'home', href: '/'},
      {name: 'music', href: '/music'},
      {name: 'other', href: '/other'}];

  function calcButtonWidth() {
        return Math.floor(windowWidth/(3*16));
    }
</script>

<div id="menu">
    {#each buttons as button}
        <MenuButton 
            name={button.name} 
            href={button.href} 
            size={windowWidth > 1200 ? 26 : calcButtonWidth()}
        />
    {/each}
</div>

<style>
  #menu {
      display: flex;
      justify-content: center;
      max-width: 100%;
      padding-top: 10px;
  }
</style>
