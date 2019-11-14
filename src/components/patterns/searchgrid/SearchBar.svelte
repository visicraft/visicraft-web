<script>
    import {SORTING_DIRECTIONS, SORTING_MODES} from "../../../lib/util/constants";

    import SortDropdown from "../../elements/dropdowns/SortDropdown.svelte";
    import ColumnButtons, {COLUMN_SIZES} from "../../elements/buttons/ColumnButtons.svelte";
    import SortButton from "../../elements/buttons/SortButton.svelte";

    export let column_size = COLUMN_SIZES.medium;
    export let filter = "";
    export let sorting = SORTING_MODES.recent;
    export let sorting_direction = SORTING_DIRECTIONS.ascending;
</script>

<div class="modal p-tiny search-bar mx-small of-visible">
    <SortDropdown bind:value={sorting} />

    <div class="fm fm-text">
        <input type="search" name="keywords" placeholder="...enter filter" bind:value={filter} />
    </div>

    <ColumnButtons color="hollow-primary" bind:value={column_size} />

    <SortButton bind:value={sorting_direction} />
</div>
