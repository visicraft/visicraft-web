<script context="module">
    import {COLUMN_SIZES} from "../../../components/elements/buttons/ColumnButtons.svelte";

    /**
     * Represents the column sizes of each tile size level
     */
    const TILE_COLUMN_SIZES = {
        [COLUMN_SIZES.small]: ["col-4", "col-3-m", "col-2-1"],
        [COLUMN_SIZES.medium]: ["col-6", "col-4-m", "col-3-1"]
    };

    /**
     * Returns the `string[]` of breakpoint tile column sizes, for the supplied size level
     */
    function get_column_sizes(size) {
        const column_sizes = TILE_COLUMN_SIZES[size];
        if (column_sizes) return column_sizes;

        throw new Error(`bad change to 'SearchGrid.tiles_sizes' (unsupported tile size '${size}')`);
    }
</script>

<script>
    export let items;
    export let column_size = COLUMN_SIZES.small;

    $: [columns_small, columns_medium, columns_large] = get_column_sizes(column_size);
</script>

<div class="grid max-w-100">
    {#each items as item}
        <div class="{columns_small} {columns_medium} {columns_large} d-flex jc-center">
            <slot {item} />
        </div>
    {/each}
</div>
