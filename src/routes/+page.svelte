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
        if (y < -10 || y > by) vy *= -1; // -5 to adjust for text margin
        title.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(updatePosition);
    }

    function initializeTitle() {
        bx = content.offsetWidth - title.offsetWidth;
        by = content.offsetHeight - title.offsetHeight;
        x = Math.random()*bx;
        y = Math.random()*by;
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
    #content {
        position: relative;
        width: 100%;
        height: 100%;
    }

    #title {
        position: absolute;
        visibility: hidden;
        will-change: transform;
    }
</style>