<script>
    import {
        CONTENT_TYPES,
        get_content_color_class,
        get_content_name,
        get_content_symbol_class
    } from "../../../lib/util/content";

    import ContentIcon from "../icons/ContentIcon.svelte";

    let _class = "";
    export let style = "";

    export let href = "";
    export let icon = false;
    export let plural = false;
    export let title = false;
    export let type = CONTENT_TYPES.powers;

    export {_class as class};

    $: name = get_content_name(type, plural);
    $: color_class = get_content_color_class(type);
    $: symbol_class = get_content_symbol_class(type);
    $: text_color_class = color_class === "light" ? "dark" : "light";
</script>

{#if href}
    <a class="modal d-block link-fade rel bc-{color_class}-bright ta-center {_class}" {href} {style}>
        {#if icon}
            <div class="grid-edge abs-l abs-t w-100 h-100 ai-center pl-small">
                <ContentIcon class="o-most-muted vc-fs-large vc-outline-medium" {type} color />
            </div>
        {/if}

        <span class="h6 h5-m h4-l c-{text_color_class} tt-upper">{name}</span>
    </a>
{:else}
    <div class="modal rel bc-{color_class}-bright ta-center {_class}" {style}>
        {#if icon}
            <div class="grid-edge abs-l abs-t w-100 h-100 ai-center pl-small">
                <ContentIcon class="o-most-muted vc-fs-large vc-outline-medium" {type} color />
            </div>
        {/if}

        <span class="h6 h5-m h4-l c-{text_color_class} tt-upper">{name}</span>
    </div>
{/if}
