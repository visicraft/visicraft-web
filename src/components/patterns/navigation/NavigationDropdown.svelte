<script>
    let _class = "";
    export let style = "";

    export let aside = false;
    export let items = [];
    export let title = "N/A";

    export {_class as class};
</script>

{#if aside}
    <div class="dropdown-static {_class}" {style}>
        <button class="btn btn-ico-right btn-text-light" data-none-toggle>
            {title}
            <i class="ico ico-down" />
        </button>

        <div class="dropdown-menu">
            <div class="dropdown-items" data-toggle>
                {#each items as item}
                    <a class="btn btn-text-light" class:btn-active={item.active} href={item.href}>{item.text}</a>
                {/each}
            </div>
        </div>
    </div>
{:else}
    <div class="dropdown-static dropdown-absolute-m dropdown-align-right">
        <button class="btn btn-ico-right btn-text-light">
            {title}
            <i class="ico ico-down" />
        </button>

        <div class="dropdown-menu mx-small-m">
            <div class="dropdown-items mt-small-m {_class}" {style} data-toggle>
                {#each items as item}
                    <a class="btn btn-text-light" class:btn-active={item.active} href={item.href}>{item.text}</a>
                {/each}
            </div>
        </div>
    </div>
{/if}
