<script lang="ts">
    import { onMount} from 'svelte';
    import { getRandomPos, getEdges } from '$lib/utils';

    let content: HTMLElement;
    let title: HTMLElement;
    let pos = $state([0,0]);
    let angle = Math.random()*2*Math.PI;
    let dir = $state([Math.cos(angle),Math.sin(angle)])
    let visible = $state(false);

    function updatePosition() {
        let bounds = getEdges(content);
        let edges = getEdges(title);
        console.log(bounds)
        if (edges['left'] + dir[0] < bounds['left'] || edges['right'] + dir[0] > bounds['right']) {
            dir[0] = - dir[0];
        }
        if (edges['top'] + dir[0] < bounds['top'] || edges['bottom'] + dir[0] > bounds['bottom']) {
            dir[1] = - dir[1];
        }
        pos[0] += dir[0]
        pos[1] += dir[1]

    }

    onMount(() => {
        pos = getRandomPos(content, title);
        visible = true;

        let interval = setInterval(updatePosition, 30);
        window.addEventListener('resize', () => pos = getRandomPos(content, title));

		return () => clearInterval(interval);
    });
</script>

<div id="content" bind:this={content}>
    <div id="title" bind:this={title} 
        style="left: {pos[0]}px; top: {pos[1]}px; visibility: {visible ? 'visible' : 'hidden'};">SPARKLETINI XOXO</div>
</div>

<style>
    #title {
        position: absolute;
    }

    #content {
        padding: 0px;
        margin: 0px;
        flex: 1;
    }
</style>