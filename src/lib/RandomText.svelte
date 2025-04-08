<script lang="ts">
    import { onMount } from 'svelte';

    let {width, height, top, left, innerHtml} = $props();
    let style = 
        'width: {width};' +
        'height: {height];' + 
        'top: {top};' +
        'left: {left};';

    let x = Math.random()*width;
    let y = Math.random()*height;
</script>

<div class="randomText" style={style}>{@html innerHtml}</div>
