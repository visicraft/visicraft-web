<script>
    import NavigationContainer from "../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationDropdown from "../components/patterns/navigation/NavigationDropdown.svelte";
    import NavigationItems from "../components/patterns/navigation/NavigationItems.svelte";
    import NavigationLinks from "../components/patterns/navigation/NavigationLinks.svelte";

    import InfoCard from "../components/elements/cards/InfoCard.svelte";

    const NAVIGATION_LEFT_LINKS = [
        {text: "Home", href: "/editor"},
        {text: "Races", href: "/editor"},
        {text: "Shop Items", href: "/editor"},
        {text: "Powers", href: "/editor"}
    ];

    const NAVIGATION_RIGHT_LINKS = [{text: "GitHub", href: "https://github.com/visicraft"}];
</script>

<svelte:head>
    <title>Visicraft :: Home</title>
</svelte:head>

<NavigationContainer title="Visicraft">
    <NavigationItems>
        <NavigationDropdown items={NAVIGATION_LEFT_LINKS} title="Editor" />
    </NavigationItems>

    <NavigationItems sub>
        <NavigationLinks items={NAVIGATION_RIGHT_LINKS} />
    </NavigationItems>
</NavigationContainer>

<main>
    <article class="article max-w-100 bc-dark c-light p-large">
        <h1 class="display">Welcome to Visicraft</h1>

        <p class="h5 px-small">
            Visicraft is an all-encompassing visual content and creation tool for
            <a class="link-light" href="https://github.com/ThaPwned/WCS">Warcraft-Source</a>
            which is a
            <a class="link-light" href="https://en.wikipedia.org/wiki/Source_(game_engine)">Source Engine</a>
            modification by
            <a class="link-light" href="https://steamcommunity.com/">Tha Pwned</a>
            allowing easy content creation.
            <br class="d-none d-block-m" />
        </p>
    </article>

    <article class="article max-w-100 px-large">
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
    </article>
</main>
