<script lang="ts">
    import MusicLink from '$lib/MusicLink.svelte';
    import { onMount } from 'svelte';

    const items = [
        ["LET'S GO SHOPLIFTING (III) - NXC MIX", "https://soundcloud.com/spraklitani/lets-go-shoplifting-part-iii"],
		["✨ UNFOLDING HORSES ✨", "https://soundcloud.com/spraklitani/unfolding-horses"],
		["DZ XX", "https://soundcloud.com/spraklitani/dz-xx"],
		["HAPPY EVER AFTER 💖", "https://soundcloud.com/spaekltini/sparkletini-b2b-yen3k-happy-ever-after"],
		["KARAOKE SUPER MIX", "https://soundcloud.com/spaekltini/sparkletini-karaoke-super-mix"],
		["SICK FRIDAY MINI MIX", "https://soundcloud.com/spaekltini/spakeltine-sick-friday-mini-mix"],
		["LIIT BDAY MIX", "https://soundcloud.com/spaekltini/sparkletini-liit-bday-mix"]
	];
</script>

<div id="content">
    {#each items as item}
        <MusicLink name={item[0]} href={item[1]} />
    {/each}
</div>

<style>
#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
}
</style>