<script context="module">
    import {SORTING_MODES} from "../../../lib/util/constants";

    /**
     * Represents the options available sorting methods to the end-user
     */
    const SORTING_DROPDOWN_ITEMS = [
        {text: "Recently Modified", value: SORTING_MODES.recent, selected: true},
        {text: "Alphabetical (A-Z)", value: SORTING_MODES.alphabetical}
    ];
</script>

<script>
    import Dropdown from "./Dropdown.svelte";

    let _class = "";
    export let style = "";

    export let value = SORTING_MODES.recent;

    export {_class as class};
</script>

<Dropdown
    class={_class}
    items={SORTING_DROPDOWN_ITEMS}
    placeholder="...select a sorting method"
    {style}
    bind:value />
