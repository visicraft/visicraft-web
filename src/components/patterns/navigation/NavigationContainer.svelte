<script>
    let _class = "";

    export let aside = false;
    export let title = "";
    export let title_href = "/";

    export {_class as class};
</script>

{#if aside}
    <aside class="nav-aside">
        {#if title}
            <a class="nav-logo link-light td-none" href={title_href}>
                <h1>{title}</h1>
            </a>
        {/if}

        <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="navigation-menu">
            <i class="ico ico-menu" />
        </button>

        <div class="nav-menu" data-toggle-target="navigation-menu">
            <button class="nav-close btn btn-ico btn-text-light" data-toggle>
                <i class="ico ico-cross" />
            </button>

            <slot />
        </div>
    </aside>
{:else}
    <header class="nav-header">
        {#if title}
            <a class="nav-logo link-light td-none" href={title_href}>
                <h1>{title}</h1>
            </a>
        {/if}

        <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="navigation_menu">
            <i class="ico ico-menu" />
        </button>

        <div class="nav-menu" data-toggle-target="navigation_menu">
            <button class="nav-close btn btn-ico btn-text-light" data-toggle>
                <i class="ico ico-cross" />
            </button>

            <slot />
        </div>
    </header>
{/if}
