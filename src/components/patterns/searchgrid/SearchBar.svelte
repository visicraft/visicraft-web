<script context="module">
    /**
     * Represents the options available sorting methods to the end-user
     */
    const SORTING_DROPDOWN_ITEMS = [
        {text: "Recently Modified", value: "recent", selected: true},
        {text: "Alphabetical (A-Z)", value: "alphabetical"}
    ];
</script>

<script>
    import Dropdown from "../../elements/Dropdown.svelte";
    import ColumnButtons, {COLUMN_SIZES} from "../../elements/buttons/ColumnButtons.svelte";
    import SortButton, {SORTING_DIRECTIONS} from "../../elements/buttons/SortButton.svelte";

    export let column_size = COLUMN_SIZES.medium;
    export let filter = "";
    export let sorting = "recent";
    export let sorting_direction = SORTING_DIRECTIONS.ascending;
</script>

<div class="modal p-tiny search-bar mx-small of-visible">
    <Dropdown items={SORTING_DROPDOWN_ITEMS} placeholder="...select a sorting method" bind:value={sorting} />

    <div class="fm fm-text">
        <input type="search" name="keywords" placeholder="...enter filter" bind:value={filter} />
    </div>

    <ColumnButtons color="hollow-primary" bind:value={column_size} />

    <SortButton bind:value={sorting_direction} />
</div>
