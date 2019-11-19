<script>
    import {CONTENT_TYPES, get_content_name, get_content_class} from "../../../lib/util/content";

    import ContentIcon from "../icons/ContentIcon.svelte";

    let _class = "";
    export let style = "";

    export let fluid = false;
    export let href = "";
    export let icon = false;
    export let plural = false;
    export let type = CONTENT_TYPES.powers;

    export {_class as class};

    $: content_class = get_content_class(type);
    $: fluid_class = fluid ? "vc-fluid" : "";
    $: name = get_content_name(type, plural);
</script>

<style>
    .vc-content-button {
        /* modal */
        display: inline-block;
        position: relative;

        padding-top: 2.25rem;
        padding-bottom: 2.25rem;

        padding-left: 8rem;
        padding-right: 8rem;

        background: #f7f7f7;
        background-color: rgb(247, 247, 247);
        border-radius: 0;

        overflow: hidden;
        z-index: 1;
    }

    .vc-content-button.vc-fluid {
        display: block;

        padding-left: 0;
        padding-right: 0;
    }

    .vc-content-button::before {
        display: block;
        width: 100%;
        height: 100%;

        content: "";

        position: absolute;
        top: 0;
        left: 0;

        filter: brightness(1.15);
        transition: filter 0.15s;

        z-index: -1;
    }

    .vc-content-button-power::before {
        background-color: var(--bc-danger);
    }

    .vc-content-button-race::before {
        background-color: var(--bc-primary);
    }

    .vc-content-button-shopitem::before {
        background-color: var(--bc-light);
        filter: brightness(0.97);
    }

    .vc-content-button:active::before,
    .vc-content-button:hover::before {
        filter: brightness(1);
    }

    .vc-content-button-shopitem:active::before,
    .vc-content-button-shopitem:hover::before {
        filter: brightness(0.93);
    }

    a.vc-content-button {
        text-decoration: none;
    }

    :global(.vc-content-button-icon) {
        position: absolute;
        left: 0;
        top: 0;

        padding-top: var(--spacing-large);
        padding-left: var(--spacing-tiny);

        color: var(--muted);
        font-size: 15rem;

        opacity: 0.15;
        transition: opacity 0.15s;
    }

    .vc-content-button:active > :global(.vc-content-button-icon),
    .vc-content-button:hover > :global(.vc-content-button-icon) {
        opacity: 0.25;
    }

    .vc-content-button-text {
        padding: 0;

        color: var(--light);
        font-size: 1.7rem;

        text-align: center;
        text-transform: uppercase;
    }

    .vc-content-button-shopitem > .vc-content-button-text {
        color: var(--main);
    }
</style>

{#if href}
    <a class="vc-content-button vc-content-button-{content_class} {fluid_class} {_class}" {href} {style}>
        {#if icon}
            <ContentIcon class="vc-content-button-icon vc-outline-medium" {type} color />
        {/if}

        <p class="vc-content-button-text">{name}</p>
    </a>
{:else}
    <div class="vc-content-button vc-content-button-{content_class} {fluid_class} {_class}" {style}>
        {#if icon}
            <ContentIcon class="vc-content-button-icon vc-outline-medium" {type} color />
        {/if}

        <p class="vc-content-button-text">{name}</p>
    </div>
{/if}
