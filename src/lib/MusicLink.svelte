<script lang="ts">
    import { onMount} from 'svelte';

    let { name, href} = $props();
    let container: HTMLElement;
    let link: HTMLElement;

    onMount(() => {
        container.style.width = `${Math.min(1200,window.innerWidth)}px`;
        
        let x = Math.random()*(container.offsetWidth - link.offsetWidth);
        link.style.left = `${x}px`;

        let y = Math.random()*(container.offsetHeight - link.offsetHeight);
        link.style.top = `${y}px`;

        link.style.visibility = 'visible'
    });
</script>

<div class="linkContainer" bind:this={container}>
    <span><a class="musicLink" href={href} bind:this={link}>{name}</a></span>
</div>

<style>
.linkContainer {
    position: relative;
    height: 70px;
}

.linkContainer:first-child {
    margin-top: 20px;
}

.musicLink {
    position: absolute;
    white-space: nowrap;
    visibility: hidden;
}
</style>