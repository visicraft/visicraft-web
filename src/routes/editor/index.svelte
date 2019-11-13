<script>
    import IndicatorCard from "../../components/elements/cards/IndicatorCard.svelte";
</script>

<svelte:head>
    <title>Visicraft :: Editor</title>
</svelte:head>

<article class="article max-w-100">
    <h2>Content Libraries</h2>

    <div class="grid">
        <div class="col-12 col-6-m col-4-l mb-small">
            <IndicatorCard type="power" href="/editor/powers" icon plural />
        </div>

        <div class="col-12 col-6-m col-4-l mb-small">
            <IndicatorCard type="race" href="/editor/races" icon plural />
        </div>

        <div class="col-12 col-6-m col-4-l mb-small">
            <IndicatorCard type="shopitem" href="/editor/shopitems" icon plural />
        </div>
    </div>
</article>

<article class="article max-w-100">
    <h2>Recently Edited</h2>

</article>
