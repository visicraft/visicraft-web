<script>
    let _class = "";

    export let title = "";
    export let sub = false;

    export {_class as class};

    $: items_class = sub ? "nav-sub-items" : "nav-items";
</script>

<nav class="{items_class} {_class}" data-toggle>
    {#if title}
        <p class="h5 px-small pt-none c-light">{title}</p>
    {/if}

    <slot />
</nav>
