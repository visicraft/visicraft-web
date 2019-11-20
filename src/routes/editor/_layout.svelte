<script>
    import {stores} from "@sapper/app";

    import SpinnerOverlay from "../../components/elements/overlays/SpinnerOverlay.svelte";

    import NavigationContainer from "../../components/patterns/navigation/NavigationContainer.svelte";
    import NavigationLinks from "../../components/patterns/navigation/NavigationLinks.svelte";
    import NavigationItems from "../../components/patterns/navigation/NavigationItems.svelte";

    import {get_query_string} from "../../lib/util/browser";
    import {initialize_client} from "../../lib/util/visicraft";

    const is_browser = process.browser;
    const {page, preloading} = stores();

    let NAVIGATION_MAIN_LINKS = [];
    let NAVIGATION_RACES_LINKS = [];
    let NAVIGATION_POWERS_LINKS = [];
    let NAVIGATION_SHOPITEMS_LINKS = [];

    function check_active(path, link) {
        return {...link, active: path === link.href};
    }

    $: NAVIGATION_RACES_LINKS = [check_active($page.path, {text: "Library", href: "/editor/races"})];
    $: NAVIGATION_SHOPITEMS_LINKS = [check_active($page.path, {text: "Library", href: "/editor/shopitems"})];
    $: NAVIGATION_POWERS_LINKS = [check_active($page.path, {text: "Library", href: "/editor/powers"})];

    $: {
        NAVIGATION_MAIN_LINKS = [
            check_active($page.path, {text: "Home", href: "/editor"}),
            check_active($page.path, {text: "Create", href: "/editor/create"}),
            check_active($page.path, {text: "Import", href: "/editor/import"})
        ];
    }
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
        <!--
            HACK:
                technically $preloading should be `true`, but is instead `null` by default interestingly
                enough. it sets to `false` whenever `preload` is finished though, so effectively the same
        -->
        <SpinnerOverlay active={$preloading === null}>
            {#if is_browser}
                <slot />
            {/if}
        </SpinnerOverlay>
    </main>
</div>
