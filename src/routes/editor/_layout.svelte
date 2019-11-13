<script>
    import NavigationContainer from "../../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationLinks from "../../components/patterns/navigation/NavigationLinks.svelte";
    import NavigationItems from "../../components/patterns/navigation/NavigationItems.svelte";

    const NAVIGATION_MAIN_LINKS = [
        {text: "Home", href: "/editor"},
        {text: "Create", href: "/editor/create"},
        {text: "Import", href: "/editor/import"}
    ];

    const NAVIGATION_RACES_LINKS = [{text: "Library", href: "/editor/races"}];

    const NAVIGATION_SHOPITEMS_LINKS = [{text: "Library", href: "/editor/shopitems"}];

    const NAVIGATION_POWERS_LINKS = [{text: "Library", href: "/editor/powers"}];
</script>

<div class="grid-edge">
    <NavigationContainer title="Editor" title_href="/editor" aside>
        <NavigationItems>
            <NavigationLinks items={NAVIGATION_MAIN_LINKS} />
        </NavigationItems>

        <NavigationItems title="Races">
            <NavigationLinks items={NAVIGATION_RACES_LINKS} />
        </NavigationItems>

        <NavigationItems title="Shop Items">
            <NavigationLinks items={NAVIGATION_SHOPITEMS_LINKS} />
        </NavigationItems>

        <NavigationItems title="Powers">
            <NavigationLinks items={NAVIGATION_POWERS_LINKS} />
        </NavigationItems>
    </NavigationContainer>

    <main class="container col-auto px-large">
        <slot />
    </main>
</div>
