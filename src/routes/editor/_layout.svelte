<script>
    import NavigationContainer from "../../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationLinks from "../../components/patterns/navigation/NavigationLinks.svelte";
    import NavigationItems from "../../components/patterns/navigation/NavigationItems.svelte";

    const NAVIGATION_MAIN_LINKS = [{text: "Home", href: "/"}];

    const NAVIGATION_RACES_LINKS = [{text: "Library", href: "/races"}, {text: "Import", href: "/races/import"}];

    const NAVIGATION_SHOPITEMS_LINKS = [
        {text: "Library", href: "/shopitems"},
        {text: "Import", href: "/shopitems/import"}
    ];

    const NAVIGATION_POWERS_LINKS = [{text: "Library", href: "/powers"}, {text: "Import", href: "/powers/import"}];
</script>

<div class="grid-edge">
    <NavigationContainer title="Editor" title_href="/editor" aside>
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
