<script>
    import SortDropdown from "../../elements/dropdowns/SortDropdown.svelte";
    import ColumnButtons, {COLUMN_SIZES} from "../../elements/buttons/ColumnButtons.svelte";
    import SortButton from "../../elements/buttons/SortButton.svelte";

    import {debounce} from "../../../lib/util/animation";
    import {SORTING_DIRECTIONS, SORTING_MODES} from "../../../lib/util/constants";

    let _filter;

    export let column_size = COLUMN_SIZES.medium;
    export let filter = "";
    export let sorting_direction = SORTING_DIRECTIONS.ascending;
    export let sorting_mode = SORTING_MODES.recent;

    const update_filter = debounce((x) => {
        filter = x;
    }, 250);

    $: update_filter(_filter);
    $: _filter = filter;
</script>

<div class="modal p-tiny search-bar mx-small of-visible">
    <SortDropdown bind:value={sorting_mode} />

    <div class="fm fm-text">
        <input type="search" name="keywords" placeholder="...enter filter" bind:value={_filter} />
    </div>

    <ColumnButtons color="hollow-primary" bind:value={column_size} />

    <SortButton bind:value={sorting_direction} />
</div>
