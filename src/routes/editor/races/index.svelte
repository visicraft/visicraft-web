<script>
    import ContentCard from "../../../components/elements/cards/ContentCard.svelte";

    import SearchBar from "../../../components/patterns/searchgrid/SearchBar.svelte";
    import SearchGrid from "../../../components/patterns/searchgrid/SearchGrid.svelte";

    import {get_races} from "../../../lib/stores/races";
    import {get_query_string, update_query_string} from "../../../lib/util/browser";
    import {SORTING_DIRECTIONS, SORTING_MODES} from "../../../lib/util/constants";

    const query_params = get_query_string();

    let column_size;
    let filter = query_params.filter ? query_params.filter : "";
    let sorting_direction = query_params.sorting_direction
        ? query_params.sorting_direction
        : SORTING_DIRECTIONS.ascending;
    let sorting_mode = query_params.sorting_mode ? query_params.sorting_mode : SORTING_MODES.recent;

    $: races = get_races(sorting_direction, sorting_mode, filter);

    $: {
        const _filter = filter ? filter : undefined;
        const _sorting_direction =
            sorting_direction === SORTING_DIRECTIONS.ascending ? undefined : sorting_direction;
        const _sorting_mode = sorting_mode === SORTING_MODES.recent ? undefined : sorting_mode;

        update_query_string({
            filter: _filter,
            sorting_direction: _sorting_direction,
            sorting_mode: _sorting_mode
        });
    }
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
