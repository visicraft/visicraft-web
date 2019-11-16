<script>
    import NavigationContainer from "../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationDropdown from "../components/patterns/navigation/NavigationDropdown.svelte";
    import NavigationItems from "../components/patterns/navigation/NavigationItems.svelte";
    import NavigationLinks from "../components/patterns/navigation/NavigationLinks.svelte";

    import InfoCard from "../components/elements/cards/InfoCard.svelte";

    const NAVIGATION_DOCUMENTATION_LINKS = [
        {text: "Developer Documentation", href: "/documentation/developer"},
        {text: "End-User Manual", href: "/documentation/end-user"}
    ];

    const NAVIGATION_EDITOR_LINKS = [
        {text: "Home", href: "/editor"},
        {text: "Races", href: "/editor/races"},
        {text: "Shop Items", href: "/editor/shopitems"},
        {text: "Powers", href: "/editor/powers"}
    ];

    const NAVIGATION_MISC_LINKS = [
        {text: "Changelog", href: "https://github.com/visicraft/visicraft-web/blob/master/CHANGELOG.md"},
        {text: "GitHub", href: "https://github.com/visicraft"}
    ];
</script>

<svelte:head>
    <title>Visicraft :: Home</title>
</svelte:head>

<NavigationContainer class="rel px-large py-medium" title="Visicraft">
    <!-- HACK: this is here so the sub (right-aligned) links are have proper postional layout -->
    <NavigationItems />

    <NavigationItems sub>
        <NavigationDropdown class="sd-high" items={NAVIGATION_EDITOR_LINKS} title="Editor" />
    </NavigationItems>

    <NavigationItems sub>
        <NavigationDropdown class="sd-high" items={NAVIGATION_DOCUMENTATION_LINKS} title="Documentation" />
    </NavigationItems>

    <NavigationItems sub>
        <NavigationLinks items={NAVIGATION_MISC_LINKS} />
    </NavigationItems>
</NavigationContainer>

<main>
    <article class="article grid-edge jc-center ta-center max-w-100 p-large bc-dark c-light">
        <h1 class="col-12 display mb-medium">Visual Editor for Warcraft-Source</h1>

        <p class="col-12 h2 c-inverse-muted px-small">
            <!-- HACK: prettier kept formatting line breaks at punctuation... so we're doing raw HTML instead -->
            {@html `Visicraft is a visual content creation tool for <a class="link-light" href="https://github.com/ThaPwned/WCS">Warcraft-Source</a>,`}
            <br class="d-none d-block-m" />
            {@html `which is a <a class="link-light" href="https://en.wikipedia.org/wiki/Source_(game_engine)">Source Engine</a> modification by <a class="link-light" href="https://github.com/ThaPwned">Tha Pwned</a>.`}
        </p>

        <p class="col-12 px-small">
            <a class="btn btn-primary btn-large" href="/documentation/end-user">Getting Started</a>
            <a class="btn btn-hollow-light btn-large" href="/editor">Use Editor</a>
        </p>

        <figure class="media rel w-75 sd-high">
            <picture class="media-content">
                <div class="bc-secondary">&nbsp;</div>
            </picture>
        </figure>
    </article>

    <aside class="article max-w-100 px-large">
        <h2 class="display">Features</h2>

        <div class="grid">
            <div class="col-12 col-4-l mb-small mb-none-l">
                <InfoCard
                    color="danger"
                    text="Browser-oriented"
                    subtext="Open Source and built for modern Web Browsers, Visicraft is accessible on all of your
                    devices. Just load the URL and create away!" />
            </div>

            <div class="col-12 col-4-l mb-small mb-none-l">
                <InfoCard
                    color="primary"
                    text="Library of Content"
                    subtext="Using Visicraft, it can easily manage all of your Warcraft-Source content. Also allows
                    import / export of your favourite Community Content." />
            </div>

            <div class="col-12 col-4-l mb-small mb-none-l">
                <InfoCard
                    color="dark"
                    text="Visual Editor"
                    subtext="By having Races / Shop Items skills composed of Visicraft's Powers, you can easily
                    create new content using the visual Architecture Editor." />
            </div>
        </div>
    </aside>

    <footer class="modal bc-muted article grid-edge max-w-100 py-tiny">
        <p class="col-12 col-8-m">
            {@html `Made by <a class="td-none" href="https://github.com/orgs/visicraft/people">Visicraft Working Group</a>.`}
        </p>

        <p class="col-12 col-4-m ta-right">
            <a class="td-none" href="https://github.com/visicraft">GitHub</a>
        </p>
    </footer>
</main>
