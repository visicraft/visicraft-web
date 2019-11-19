<script>
    import {get_content_class} from "../../../lib/util/content";

    let _class = "";
    export let style = "";

    export let color = false;
    export let type = "";

    export {_class as class};

    $: color_class = color ? "vc-color" : "";
    $: content_class = get_content_class(type);
</script>

<style>
    *[class*="vc-symbol-"] {
        display: inline-block;

        font-family: "Courier New", Courier, monospace;

        font-style: normal;
        font-weight: bold;
    }

    *[class*="vc-symbol-"]::before {
        display: inline;
    }

    .vc-symbol-power::before {
        content: "\02AA7";
    }

    .vc-symbol-power.vc-color {
        color: #d12626; /* c-danger */
    }

    .vc-symbol-race {
        transform: rotate(-90deg);
    }

    .vc-symbol-race::before {
        content: "\02A79";
    }

    .vc-symbol-race.vc-color {
        color: #fa73a0; /* c-primary */
    }

    .vc-symbol-shopitem::before {
        content: "\02A50";
    }

    .vc-symbol-shopitem.vc-color {
        color: white; /* c-white */
    }
</style>

<i class="vc-symbol-{content_class} {color_class} {_class}" {style} />
