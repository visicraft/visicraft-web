<script context="module">
    import {preload_browser} from "../../../lib/util/browser";
    import {preload_client} from "../../../lib/util/visicraft";

    export const preload = preload_browser(preload_client());
</script>

<script>
    import {COLUMN_SIZES} from "../../../components/elements/buttons/ColumnButtons.svelte";
    import ContentCard from "../../../components/elements/cards/ContentCard.svelte";
    import SpinnerLoader from "../../../components/elements/loaders/SpinnerLoader.svelte";

    import BreadcrumbLinks from "../../../components/patterns/breadcrumb/BreadcrumbLinks.svelte";
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

    $: query = get_races({filter: $filter, sorting_direction: $sorting_direction, sorting_mode: $sorting_mode});
</script>

<svelte:head>
    <title>Visicraft :: Editor - Races</title>
</svelte:head>

<article class="article max-w-100">
    <h2>
        <BreadcrumbLinks items={[{href: '/editor', text: 'Content Library'}, {text: 'Races'}]} />
    </h2>

    <SearchBar
        bind:column_size={$column_size}
        bind:filter={$filter}
        bind:sorting_direction={$sorting_direction}
        bind:sorting_mode={$sorting_mode} />

    {#if $query.preloading}
        <div class="d-flex jc-center w-100">
            <SpinnerLoader />
        </div>
    {:else}
        <SearchGrid column_size={$column_size} items={$query.races} let:item>
            <ContentCard
                class="w-100"
                contributors={item.contributors.join(' ')}
                href="/editor/races/{item.get_short_identifier()}/{item.get_title_slug()}"
                title={item.title}
                type={item.content_type}
                indicator />
        </SearchGrid>
    {/if}
</article>
