<script context="module">
    /**
     * Represents the indicator sizes supported by `ContentIndicator`
     */
    export const INDICATOR_SIZES = {
        none: "",
        tiny: "tiny",
        small: "small",
        medium: "medium",
        large: "large"
    };

    /**
     * Represents the size classes associated with each indicator size type
     */
    const INDICATOR_SIZE_CLASSES = {
        [INDICATOR_SIZES.none]: "vc-content-indicator",
        [INDICATOR_SIZES.tiny]: "vc-content-indicator-tiny",
        [INDICATOR_SIZES.small]: "vc-content-indicator-small",
        [INDICATOR_SIZES.medium]: "vc-content-indicator-medium",
        [INDICATOR_SIZES.large]: "vc-content-indicator-large"
    };

    /**
     * Returns the size class associated with the indicator size type, throwing an exception missing size types
     */
    function get_indicator_size_class(size) {
        const _class = INDICATOR_SIZE_CLASSES[size.toLowerCase()];
        if (_class) return _class;
        if (size === null) return "";

        throw new Error(`bad change to 'ContentIndicator.size' (size type '${size}' not supported`);
    }
</script>

<script>
    import {
        CONTENT_TYPES,
        get_content_color_class,
        get_content_name,
        get_content_symbol_class
    } from "../../lib/util/content";

    let _class = "";

    export let brackets = false;
    export let href = "";
    export let icon = false;
    export let plural = false;
    export let title = false;
    export let type = CONTENT_TYPES.powers;
    export let size = INDICATOR_SIZES.none;

    export {_class as class};

    $: name = get_content_name(type, plural);
    $: color_class = get_content_color_class(type);
    $: symbol_class = get_content_symbol_class(type);
    $: size_class = get_indicator_size_class(size);
</script>

<style>
    .vc-content-indicator,
    .vc-content-indicator-tiny,
    .vc-content-indicator-small,
    .vc-content-indicator-medium,
    .vc-content-indicator-large {
        display: inline-flex;

        text-transform: uppercase;
    }

    a.vc-content-indicator,
    a.vc-content-indicator-tiny,
    a.vc-content-indicator-small,
    a.vc-content-indicator-medium,
    a.vc-content-indicator-large {
        text-decoration: none;

        filter: saturate(1) opacity(100%);
        transition: filter 0.1s;
    }

    a.vc-content-indicator:hover,
    a.vc-content-indicator-tiny:hover,
    a.vc-content-indicator-small:hover,
    a.vc-content-indicator-medium:hover,
    a.vc-content-indicator-large:hover {
        filter: saturate(0.85) opacity(25%);
    }

    .vc-content-indicator {
        height: 19px;

        font-size: 19px;
        line-height: 19px;
    }

    .vc-content-indicator-tiny {
        height: 12px;

        font-size: 12px;
        line-height: 12px;
    }

    .vc-content-indicator-small {
        height: 16px;

        font-size: 16px;
        line-height: 16px;
    }

    .vc-content-indicator-medium {
        height: 22px;

        font-size: 22px;
        line-height: 22px;
    }

    .vc-content-indicator-large {
        height: 24px;

        font-size: 24px;
        line-height: 24px;
    }

    .vc-content-indicator,
    .vc-content-indicator-tiny,
    .vc-content-indicator-small {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
    }

    .vc-content-indicator-medium,
    .vc-content-indicator-large {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .vc-content-indicator-bracket {
        font-size: 175%;
    }

    .vc-content-indicator-bracket:first-child {
        margin-top: 0.25rem;
    }

    .vc-content-indicator-bracket:last-child {
        margin-bottom: 0.25rem;
    }

    .vc-content-indicator-icon {
        font-size: 125%;
    }

    .vc-content-indicator-title + .vc-content-indicator-icon {
        margin-left: 0.25rem;
    }

    .vc-content-indicator-medium > .vc-content-indicator-title + .vc-content-indicator-icon,
    .vc-content-indicator-large > .vc-content-indicator-title + .vc-content-indicator-icon {
        margin-left: 0.5rem;
    }
</style>

{#if href}
    <a {href} class="{size_class} ai-center {_class}">
        {#if brackets}
            <span class="vc-content-indicator-bracket">&llcorner;</span>
        {/if}

        {#if title}
            <div class="vc-content-indicator-title">
                <span>{name}</span>
            </div>
        {/if}

        {#if icon}
            <div class="vc-content-indicator-icon">
                <i class="c-{color_class} {symbol_class}">&nbsp;&nbsp;</i>
            </div>
        {/if}

        {#if brackets}
            <span class="vc-content-indicator-bracket">&urcorner;</span>
        {/if}
    </a>
{:else}
    <div class="{size_class} ai-center {_class}">
        {#if brackets}
            <span class="vc-content-indicator-bracket">&llcorner;</span>
        {/if}

        {#if title}
            <div class="vc-content-indicator-title">
                <span>{name}</span>
            </div>
        {/if}

        {#if icon}
            <div class="vc-content-indicator-icon">
                {#if title}
                    <i class="c-{color_class} {symbol_class}">&nbsp;&nbsp;</i>
                {:else}
                    <i class="c-{color_class} {symbol_class}">&nbsp;&nbsp;&nbsp;</i>
                {/if}
            </div>
        {/if}

        {#if brackets}
            <span class="vc-content-indicator-bracket">&urcorner;</span>
        {/if}
    </div>
{/if}
