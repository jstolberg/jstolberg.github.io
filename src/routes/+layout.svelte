<script lang='ts'>
    import '../app.css';
    import MenuButton from '$lib/MenuButton.svelte';

	let { children } = $props();

    let buttons = [
        {name: 'home', href: '/'},
        {name: 'music', href: '/music'},
        {name: 'other', href: '/other'}];
</script>

<div id="container">
    <div id="menu">
        {#each buttons as button}
            <MenuButton name={button.name} href={button.href}/>
        {/each}
    </div>
    <div class="page-content">
        {@render children()}
    </div>
</div>

<style>
#menu {
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding-top: 10px;
}

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