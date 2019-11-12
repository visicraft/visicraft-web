<script>
    let _class = "";

    export let items = [];
    export let title = "N/A";

    export {_class as class};
</script>

<div class="dropdown-static {_class}">
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
