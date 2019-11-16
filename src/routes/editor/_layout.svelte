<script>
    import {onMount} from "svelte";

    import NavigationContainer from "../../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationLinks from "../../components/patterns/navigation/NavigationLinks.svelte";
    import NavigationItems from "../../components/patterns/navigation/NavigationItems.svelte";

    import {initialize_client} from "../../lib/util/visicraft";

    const NAVIGATION_MAIN_LINKS = [
        {text: "Home", href: "/editor"},
        {text: "Create", href: "/editor/create"},
        {text: "Import", href: "/editor/import"}
    ];

    const NAVIGATION_RACES_LINKS = [{text: "Library", href: "/editor/races"}];

    const NAVIGATION_SHOPITEMS_LINKS = [{text: "Library", href: "/editor/shopitems"}];

    const NAVIGATION_POWERS_LINKS = [{text: "Library", href: "/editor/powers"}];

    let _client;

    onMount(() => {
        if (!window._vc_client) _client = initialize_client();
    });
</script>

<style>
    @keyframes loading-glow {
        0% {
            opacity: 0.15;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.15;
        }
    }

    .progress {
        padding-left: 15%;
        padding-right: 15%;

        background-color: transparent;
        height: 1rem;

        animation: loading-glow 2.5s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }
</style>

{#await _client}
    <div class="d-flex ai-center min-w-100vw min-h-100vh ta-center c-light bc-dark">
        <div class="w-100">
            <h1 class="display mb-medium">LOADING...</h1>

            <div class="progress">
                <div class="progress-bar bc-primary w-25">&nbsp;</div>
                <div class="progress-bar bc-secondary w-25">&nbsp;</div>
                <div class="progress-bar bc-danger w-25">&nbsp;</div>
                <div class="progress-bar bc-light w-25">&nbsp;</div>
            </div>
        </div>
    </div>
{:then _}
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
{:catch err}
    ERROR: {err}
{/await}
