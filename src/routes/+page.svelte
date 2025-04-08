<script lang="ts">
    import { onMount} from 'svelte';
    import { getRandomPos } from '$lib/utils';

    let content: HTMLElement;
    let title: HTMLElement;
    let angle = Math.random()*2*Math.PI;
    let [x,y,vx,vy,bx,by] = [0,0,Math.cos(angle),Math.sin(angle),0,0];

    function updatePosition() {
        x += vx;
        y += vy;
        if (x < 0 || x > bx) vx *= -1;
        if (y < 0 || y > by) vy *= -1;
        title.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(updatePosition);
    }

    function initializeTitle() {
        [x,y] = getRandomPos(content, title);
        bx = content.offsetWidth - title.offsetWidth;
        by = content.offsetHeight - title.offsetHeight;
        title.style.visibility = 'visible';
    }

    onMount(() => {
        initializeTitle()
        requestAnimationFrame(updatePosition);
        window.addEventListener('resize', initializeTitle);
    });
</script>

<div id="content" bind:this={content}>
    <div id="title" bind:this={title}>SPARKLETINI XOXO</div>
</div>

<style>
    #title {
        position: absolute;
        visibility: hidden;
        will-change: transform;
    }
</style>