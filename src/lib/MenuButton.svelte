<script lang="ts">
    let { name, href } = $props();

    function renderButton(site: String, l = 26) {
        const tb = '+' + '-'.repeat(l) + '+';
        const mid = '|' + site.padStart(Math.floor((l + site.length) / 2)).padEnd(l) + '|';
        const but = [tb, mid, tb].join('\n');
        return but;
    }
    const buttonText = renderButton(name);
</script>

<button class="ascii-button">
  <a href={href}><span>{buttonText}</span></a>
</button>

<style>
  .ascii-button {
    font-family: 'localFont';
    font-size: 16px;
    white-space: pre;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    flex-shrink: 0;
  }

  span {
    white-space: pre-wrap;
  }
</style>
