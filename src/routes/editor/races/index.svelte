<script>
    import {COLUMN_SIZES} from "../../../components/elements/buttons/ColumnButtons.svelte";
    import ContentCard from "../../../components/elements/cards/ContentCard.svelte";

    import SearchBar from "../../../components/patterns/searchgrid/SearchBar.svelte";
    import SearchGrid from "../../../components/patterns/searchgrid/SearchGrid.svelte";

    import {bind_query_parameter} from "../../../lib/stores/browser";
    import {bind_localstorage} from "../../../lib/stores/localstorage";
    import {get_races} from "../../../lib/stores/races";
    import {SORTING_DIRECTIONS, SORTING_MODES} from "../../../lib/util/constants";

    const column_size = bind_localstorage("column_size", COLUMN_SIZES.medium);
    const filter = bind_query_parameter("filter", "");
    const sorting_direction = bind_query_parameter("sorting_direction", SORTING_DIRECTIONS.ascending);
    const sorting_mode = bind_query_parameter("sorting_mode", SORTING_MODES.recent);

    $: races = get_races({filter: $filter, sorting_direction: $sorting_direction, sorting_mode: $sorting_mode});
</script>

<svelte:head>
    <title>Visicraft :: Editor - Races</title>
</svelte:head>

<article class="article max-w-100">
    <h2>Races Library</h2>

    <SearchBar
        bind:column_size={$column_size}
        bind:filter={$filter}
        bind:sorting_direction={$sorting_direction}
        bind:sorting_mode={$sorting_mode} />

    <SearchGrid column_size={$column_size} items={$races} let:item>
        <ContentCard
            class="w-100"
            contributors={item.contributors.join(' ')}
            href="/editor/races/{item.get_short_identifier()}"
            title={item.title}
            type={item.content_type}
            indicator />
    </SearchGrid>
</article>
