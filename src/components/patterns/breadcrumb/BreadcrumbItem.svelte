<script>
    let _class = "";
    export let style = "";

    export let disabled = false;
    export let items = [];
    export let href = "";

    export {_class as class};
</script>

<li>
    {#if disabled}
        <span class={_class} {style}>
            <slot />
        </span>
    {:else if href}
        <a class={_class} {href} {style}>
            <slot />
        </a>
    {:else}
        <span class="c-main {_class}" {style}>
            <slot />
        </span>
    {/if}
</li>
