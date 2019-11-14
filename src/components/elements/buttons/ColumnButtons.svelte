<script context="module">
    export const COLUMN_SIZES = {
        small: "small",

        medium: "medium"
    };

    export const COLUMN_SIZE_TEXT = {
        [COLUMN_SIZES.small]: "&square; &square; &square;",
        [COLUMN_SIZES.medium]: "&square; &square;"
    };

    const COLUMN_BUTTON_ITEMS = [
        {
            text: COLUMN_SIZE_TEXT[COLUMN_SIZES.medium],
            value: COLUMN_SIZES.medium
        },

        {
            text: COLUMN_SIZE_TEXT[COLUMN_SIZES.small],
            value: COLUMN_SIZES.small
        }
    ];
</script>

<script>
    import RadioButtons from "./RadioButtons.svelte";

    let _class = "";
    export let style = "";

    export let color = "primary";
    export let name = "radio_buttons";

    export let value = COLUMN_SIZES.medium;

    export {_class as class};
</script>

<RadioButtons class={_class} items={COLUMN_BUTTON_ITEMS} {color} {name} {style} bind:value />
