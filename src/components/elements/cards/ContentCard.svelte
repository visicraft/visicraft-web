<script>
    import ContentIcon from "../icons/ContentIcon.svelte";

    let _class = "";
    export let style = "";

    export let contributors = "N/A";
    export let href = "#";
    export let indicator = false;
    export let type = "";
    export let title = "N/A";

    export {_class as class};
</script>

<div class="modal p-tiny mb-small {_class}" {style}>
    <figure class="media rel w-100">
        <picture class="media-content-1by1">
            <div class="bc-secondary">&nbsp;</div>
        </picture>

        {#if indicator && type}
            <div class="abs-t abs-r pr-tiny">
                <ContentIcon class="p-none h2 display vc-outline" {type} color />
            </div>
        {/if}
    </figure>

    <p class="px-tiny pb-none text-ellipsis">
        <a class="fw-semibold td-none" {href}>{title}</a>
    </p>

    <p class="px-tiny py-none text-ellipsis">
        <small class="c-secondary">by {contributors}</small>
    </p>
</div>
