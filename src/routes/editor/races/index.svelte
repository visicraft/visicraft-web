<script>
    import ContentCard from "../../../components/elements/cards/ContentCard.svelte";

    import SearchBar from "../../../components/patterns/searchgrid/SearchBar.svelte";
    import SearchGrid from "../../../components/patterns/searchgrid/SearchGrid.svelte";

    import {get_races} from "../../../lib/stores/races";
    import {SORTING_DIRECTIONS, SORTING_MODES} from "../../../lib/util/constants";

    let column_size;
    let filter = "";
    let sorting_direction = SORTING_DIRECTIONS.ascending;
    let sorting_mode = SORTING_MODES.recent;

    $: races = get_races(sorting_direction, sorting_mode, filter);
</script>

<svelte:head>
    <title>Visicraft :: Editor - Races</title>
</svelte:head>

<article class="article max-w-100">
    <h2>Races Library</h2>

    <SearchBar bind:column_size bind:filter bind:sorting_direction bind:sorting_mode />

    <SearchGrid let:item {column_size} items={$races}>
        <ContentCard
            class="w-100"
            contributors={item.contributors.join(' ')}
            href="/editor/races/{item.identifier}"
            title={item.title}
            type={item.content_type}
            indicator />
    </SearchGrid>
</article>
