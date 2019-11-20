<script context="module">
    import {preload_browser} from "../../lib/util/browser";
    import {preload_client} from "../../lib/util/visicraft";

    export const preload = preload_browser(preload_client());
</script>

<script>
    import ContentButton from "../../components/elements/buttons/ContentButton.svelte";
    import BreadcrumbLinks from "../../components/patterns/breadcrumb/BreadcrumbLinks.svelte";
</script>

<svelte:head>
    <title>Visicraft :: Editor</title>
</svelte:head>

<article class="article max-w-100">
    <h2>
        <BreadcrumbLinks items={[{text: 'Content Library'}]} />
    </h2>

    <div class="grid">
        <div class="col-12 col-6-m col-4-l mb-small">
            <ContentButton type="TYPE_POWER" href="/editor/powers" fluid icon plural />
        </div>

        <div class="col-12 col-6-m col-4-l mb-small">
            <ContentButton type="TYPE_RACE" href="/editor/races" fluid icon plural />
        </div>

        <div class="col-12 col-6-m col-4-l mb-small">
            <ContentButton type="TYPE_SHOPITEM" href="/editor/shopitems" fluid icon plural />
        </div>
    </div>
</article>

<article class="article max-w-100">
    <h2>Recently Edited</h2>

</article>
