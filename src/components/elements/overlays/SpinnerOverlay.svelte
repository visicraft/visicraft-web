<script>
    import SpinnerLoader from "../loaders/SpinnerLoader.svelte";

    export let active = false;
    export let persist = false;

    $: visibility = active ? "" : "collapse";
</script>

<div class="overlay" style="visibility:{visibility}">
    <div class="overlay-body">
        <div class="modal d-flex circle ai-center jc-center p-tiny" style="min-width:0;">
            <SpinnerLoader />
        </div>
    </div>
</div>

{#if persist || !active}
    <slot />
{/if}
