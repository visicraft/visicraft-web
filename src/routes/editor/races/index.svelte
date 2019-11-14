<script>
    import {COLUMN_SIZES} from "../../../components/elements/buttons/ColumnButtons.svelte";
    import ContentCard from "../../../components/elements/cards/ContentCard.svelte";

    import SearchBar from "../../../components/patterns/searchgrid/SearchBar.svelte";
    import SearchGrid from "../../../components/patterns/searchgrid/SearchGrid.svelte";

    import {get_races} from "../../../lib/stores/races";

    const items = [
        {title: "Undead Scourage", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Human Alliance", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Orcish Horde", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Night Elves", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Blood Mage", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Archmage Proudmore", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Shadow Hunter", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Crypt Lord", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Flame Predator", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Succubus Hunter", contributors: "Tha Pwned", href: "/races/1/human-alliance"},
        {title: "Chameleon", contributors: "Tha Pwned", href: "/races/1/human-alliance"}
    ];

    let column_size;
    const races = get_races("DIRECTION_ASCEND", "MODE_ALPHABETICAL");
</script>

<svelte:head>
    <title>Visicraft :: Editor - Races</title>
</svelte:head>

<article class="article max-w-100">
    <h2>Races Library</h2>

    <SearchBar bind:column_size />

    <SearchGrid let:item {column_size} {items}>
        <ContentCard
            class="w-100"
            contributors={item.contributors}
            href={item.href}
            title={item.title}
            type="TYPE_RACE"
            indicator />
    </SearchGrid>
</article>
{JSON.stringify($races)}
