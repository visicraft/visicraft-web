<script>
    import {
        get_content_color_class,
        get_content_symbol_class,
        get_content_symbol_entity
    } from "../../../lib/util/content";

    let _class = "";
    export let style = "";

    export let color = false;
    export let type = "";

    export {_class as class};

    $: color_class = color ? "c-" + get_content_color_class(type) : "";
    $: symbol_class = get_content_symbol_class(type);
    $: symbol_entity = get_content_symbol_entity(type);
</script>

<i class="vc-symbol-{type} fs-normal {color_class} {symbol_class} {_class}" {style}>
    {@html symbol_entity}
</i>
