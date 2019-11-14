<script context="module">
    import {SORTING_DIRECTIONS} from "../../../lib/util/constants";

    const SORTING_DIRECTION_TEXT = {
        [SORTING_DIRECTIONS.ascending]: "&uuarr;",
        [SORTING_DIRECTIONS.decending]: "&ddarr;"
    };
</script>

<script>
    export let order = [SORTING_DIRECTIONS.ascending, SORTING_DIRECTIONS.decending];
    export let value = order[0];

    let next;

    $: text = SORTING_DIRECTION_TEXT[value];
    $: {
        const index = order.indexOf(value) + 1;

        if (index === order.length) next = 0;
        else next = index;
    }

    function on_click(event) {
        event.preventDefault();

        value = order[next];
    }
</script>

<button class="btn btn-primary fw-bold" on:click={on_click}>
    {@html text}
</button>
