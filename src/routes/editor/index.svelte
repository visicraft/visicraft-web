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
    import {COLUMN_SIZES} from "../../components/elements/buttons/ColumnButtons.svelte";
    import ContentCard from "../../components/elements/cards/ContentCard.svelte";

    import SearchBar from "../../components/patterns/searchgrid/SearchBar.svelte";

    let i = Array.from(new Array(15).keys());

    let column_size;
    let column_small;
    let column_medium;
    let column_large;

    $: {
        if (column_size === COLUMN_SIZES.small) {
            column_small = "col-4";
            column_medium = "col-3-m";
            column_large = "col-2-l";
        } else if (column_size === COLUMN_SIZES.medium) {
            column_small = "col-6";
            column_medium = "col-4-m";
            column_large = "col-3-l";
        }
    }
</script>

<svelte:head>
    <title>Visicraft :: Editor - Races</title>
</svelte:head>

<article class="article max-w-100">
    <h2>Races Library</h2>

    <SearchBar bind:column_size />

    <div class="grid max-w-100">
        {#each i as v}
            <div class="{column_small} {column_medium} {column_large} d-flex jc-center">
                <ContentCard
                    class="w-100"
                    title="lskhkjfksddffsdfdsfdsf"
                    contributors="Tha Pwned"
                    href="/races/1-lkfjlkdjf"
                    indicator="race" />
            </div>
        {/each}
    </div>
</article>
