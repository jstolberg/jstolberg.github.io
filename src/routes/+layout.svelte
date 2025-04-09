<script lang='ts'>
    import '../app.css';
    import {onMount, tick} from 'svelte';
    import Menu from '$lib/Menu.svelte';

	let { children } = $props();

    let windowWidth = $state(0);

    const updateWidth = () => {
        windowWidth = window.innerWidth
    }

    onMount(() => {
        updateWidth();
        addEventListener('resize', updateWidth);
        return () => removeEventListener('resize', updateWidth);
    })
</script>

<div id="container">
    {#await tick() then _}
        {#key windowWidth}
            <Menu windowWidth={windowWidth}/>
            <div class="page-content">
                {@render children()}
            </div>
        {/key}
    {/await}
</div>

<style>
#container {
	display: flex;
    flex-direction: column;
	width: 100vw;
	height: 100vh;
}

.page-content {
    display: flex;
    flex: 1;
    width: 100vw;
}
</style>