<script context="module">
    import {preload_browser} from "../../../../lib/util/browser";
    import {preload_client} from "../../../../lib/util/visicraft";

    export const preload = preload_browser(preload_client());
</script>

<script>
    import {getContext} from "svelte";
    import * as sapper from "@sapper/app";

    import DisplayText from "../../../../components/elements/forms/DisplayText.svelte";
    import SpinnerOverlay from "../../../../components/elements/overlays/SpinnerOverlay.svelte";

    import BreadcrumbContainer from "../../../../components/patterns/breadcrumb/BreadcrumbContainer.svelte";
    import BreadcrumbItem from "../../../../components/patterns/breadcrumb/BreadcrumbItem.svelte";

    import {get_race, get_race_} from "../../../../lib/stores/races";
    import {get_client} from "../../../../lib/util/visicraft";

    const {page} = sapper.stores();
    const preloading = getContext("preloading");
    console.log(preloading);

    $: query = get_race_($page.params.identifier);
    $: preloading.set(query.preloading);
    //$: console.log(query);

    async function on_changed_title(event) {
        const race = $query.race;
        await race.atomicSet("title", event.detail.value);

        const slug = race.get_title_slug();
        sapper.goto(`/editor/races/${$page.params.identifier}/${slug}`, {replaceState: true});
    }
</script>

{#if $query.race}
    <div
        class="grid-edge bc-dark c-light"
        style="margin-left:-4rem;margin-top:-2rem;padding-left:5rem;padding-right:5rem;padding-top:5rem;padding-bottom:5rem;width:calc(100%
        + 8rem);">
        <div class="col-9">
            <h2>
                <BreadcrumbContainer class="pb-none">
                    <BreadcrumbItem class="link-light" href="/editor">Content Library</BreadcrumbItem>
                    <BreadcrumbItem class="link-light" href="/editor/races">Races</BreadcrumbItem>

                    <li>
                        <DisplayText class="c-light" value={$query.race.title} on:changed={on_changed_title} />
                    </li>
                </BreadcrumbContainer>
            </h2>

            <h3 class="mt-none pt-none c-muted">
                <DisplayText value={$query.race.summary} />
            </h3>
        </div>

        <div class="col-auto">
            <div class="carousel">
                <div class="carousel-box">
                    <div class="carousel-item">
                        <div class="carousel-figure bc-secondary" />
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-figure bc-danger" />
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-figure bc-primary" />
                    </div>

                    <button class="carousel-prev btn btn-text-light btn-ico">
                        <i class="ico ico-left" />
                    </button>

                    <button class="carousel-next btn btn-text-light btn-ico">
                        <i class="ico ico-right" />
                    </button>

                    <div class="carousel-indicators btns-x btns-margin">
                        <button class="btn btn-small btn-light" />
                        <button class="btn btn-small btn-light" />
                        <button class="btn btn-small btn-light" />
                    </div>
                </div>
            </div>
        </div>
    </div>
{:else}
    <article class="article max-w-100">
        <h2>
            <BreadcrumbContainer>
                <BreadcrumbItem class="link-light" href="/editor">Content Library</BreadcrumbItem>
                <BreadcrumbItem class="link-light" href="/editor/races">Races</BreadcrumbItem>
                <BreadcrumbItem class="c-light">INVALID RACE</BreadcrumbItem>
            </BreadcrumbContainer>
        </h2>
    </article>
{/if}
