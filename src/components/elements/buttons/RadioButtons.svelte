<script>
    let _class = "";
    export let style = "";

    export let color = "primary";
    export let items = [];
    export let name = "radio_buttons";
    export let value = get_selected();

    export {_class as class};

    /**
     * Returns the initialally selected value, set via `items[i].selected`
     */
    function get_selected() {
        const _items = items.filter((item) => item.selected);

        return _items.map((item) => item.value)[0];
    }

    /**
     * Returns the selected item
     */
    export function get_value() {
        return value;
    }

    /**
     * Sets the selected item
     */
    export function set_value(_value) {
        value = _value;
    }
</script>

{#each items as item, index}
    <div class="btn-radio btn-{item.color || color} {_class}" {style}>
        <input
            type="radio"
            id="{name}-{index}"
            selected={item.selected}
            value={item.value}
            {name}
            bind:group={value} />

        <label for="{name}-{index}">
            {@html item.text}
        </label>
    </div>
{/each}
