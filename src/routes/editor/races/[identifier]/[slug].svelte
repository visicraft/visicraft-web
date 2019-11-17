<script>
    import * as sapper from "@sapper/app";

    import DisplayText from "../../../../components/elements/forms/DisplayText.svelte";

    import BreadcrumbContainer from "../../../../components/patterns/breadcrumb/BreadcrumbContainer.svelte";
    import BreadcrumbItem from "../../../../components/patterns/breadcrumb/BreadcrumbItem.svelte";

    import {get_race} from "../../../../lib/stores/races";
    import {check_client, get_client} from "../../../../lib/util/visicraft";

    check_client();

    const {page} = sapper.stores();

    $: race = get_race($page.params.identifier);

    async function on_changed_title(event) {
        const client = get_client();
        const {races} = client.datastore;

        const race = await races.query_race($race.identifier).exec();
        await race.atomicSet("title", event.detail.value);

        const slug = race.get_title_slug();
        sapper.goto(`/editor/races/${$page.params.identifier}/${slug}`, {replaceState: true});
    }
</script>

{#if $race}
    {#if $race._preloading}
        <article class="article max-w-100">
            <BreadcrumbContainer>
                <BreadcrumbItem href="/editor">Content Library</BreadcrumbItem>
                <BreadcrumbItem href="/editor/races">Races</BreadcrumbItem>
                <BreadcrumbItem>LOADING RACE...</BreadcrumbItem>
            </BreadcrumbContainer>
        </article>
    {:else}
        <article class="article max-w-100">
            <h2>
                <BreadcrumbContainer class="pb-none">
                    <BreadcrumbItem href="/editor">Content Library</BreadcrumbItem>
                    <BreadcrumbItem href="/editor/races">Races</BreadcrumbItem>
                    <li>
                        <DisplayText class="c-main" value={$race.title} on:changed={on_changed_title} />
                    </li>
                </BreadcrumbContainer>
            </h2>

            <h3 class="mt-none pt-none c-muted">
                <DisplayText bind:value={$race.summary} />
            </h3>
        </article>
    {/if}
{:else}
    <article class="article max-w-100">
        <h2>
            <BreadcrumbContainer>
                <BreadcrumbItem href="/editor">Content Library</BreadcrumbItem>
                <BreadcrumbItem href="/editor/races">Races</BreadcrumbItem>
                <BreadcrumbItem>NO RACE FOUND</BreadcrumbItem>
            </BreadcrumbContainer>
        </h2>
    </article>
{/if}
