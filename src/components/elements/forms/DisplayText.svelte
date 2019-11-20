<script>
    import {createEventDispatcher} from "svelte";

    let _class = "";
    export let style = "";

    export let editable = false;
    export let name = "";
    export let value = "";

    export {_class as class};

    const dispatch = createEventDispatcher();

    $: _value = value;

    /**
     * Hides the editing view of `DisplayText`, and if the end-user accepted their input, changes `.value`
     */
    function on_click_hide(event, accepted) {
        event.preventDefault();

        editable = false;
        if (accepted) {
            value = _value;
            dispatch("changed", {value});
        }

        dispatch("hidden");
    }

    /**
     * Shows the editing view of `DisplayText`, updating the internal representation of `._value` as-well
     */
    function on_click_show(event) {
        event.preventDefault();

        editable = true;
        _value = value;

        dispatch("shown");
    }
</script>

<style>
    .vc-display-text > button {
        visibility: hidden;
    }

    .vc-display-text:active > button,
    .vc-display-text:hover > button {
        visibility: visible;
    }
</style>

<div class="d-inline-block {_class}" class:d-none={!editable} {style}>
    <div class="fm fm-text d-inline-block" style="font-size:inherit;">
        <input {name} bind:value={_value} />
    </div>

    <button class="btn btn-primary" on:click={(event) => on_click_hide(event, true)}>&check;</button>

    <button class="btn btn-hollow-danger" on:click={(event) => on_click_hide(event, false)}>&cross;</button>
</div>

<div class="vc-display-text d-inline-block {_class}" class:d-none={editable} {style}>
    {value}
    <button class="btn btn-hollow-primary" on:click={on_click_show}>
        <i class="ico ico-plus" />
    </button>
</div>
