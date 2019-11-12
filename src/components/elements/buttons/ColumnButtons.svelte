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

    export let selected = COLUMN_SIZES.large;
</script>

<RadioButtons items={COLUMN_BUTTON_ITEMS} bind:value={selected} {...$$props} />
