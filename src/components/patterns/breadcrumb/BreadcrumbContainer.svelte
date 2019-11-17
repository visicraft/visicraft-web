<script>
    let _class = "";
    export let style = "";

    export let items = [];

    export {_class as class};
</script>

<ol class="breadcrumb {_class}" {style}>
    {#if items.length}
        {#each items as item}
            <slot {item} />
        {/each}
    {:else}
        <slot />
    {/if}
</ol>
