<script>
    let _class = "";
    export let style = "";

    export let name = "dropdown";
    export let placeholder = "...select an option";
    export let items = [];
    export let multichoice = false;
    export let value = get_selected();

    export {_class as class};

    /**
     * Returns the initialally selected values, set via `items[i].selected`
     */
    function get_selected() {
        const _items = items.filter((item) => item.selected);

        if (multichoice) return _items.map((item) => item.value);
        return _items.map((item) => item.value)[0];
    }

    /**
     * Returns the selected item(s), if multichoice, returns a cloned `string[]`
     */
    export function get_value() {
        if (multichoice) {
            if (value && value.length > 0) return value.slice();
            return [];
        }

        return value;
    }

    /**
     * Sets the selected item(s), if multichoice, use a `string[]`
     */
    export function set_value(_value) {
        value = _value;
    }
</script>

<div class="fm-dropdown dropdown-fixed dropdown-absolute-m {_class}" {style}>
    <div class="fm fm-select">
        <input {placeholder} />
    </div>

    <div class="dropdown-menu">
        {#if multichoice}
            <div class="dropdown-items" data-dropdown-toggle-disabled>
                <div class="btns-y">
                    {#each items as item, index}
                        <div class="btn-radio btn-hollow-primary">
                            <input
                                type="checkbox"
                                id="{name}-{index}"
                                checked={item.selected}
                                value={item.value}
                                bind:group={value}
                                {name} />
                            <label for="{name}-{index}">{item.text}</label>
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="dropdown-items">
                <div class="btns-y">
                    {#each items as item, index}
                        <div class="btn-radio btn-hollow-primary">
                            <input
                                type="radio"
                                id="{name}-{index}"
                                checked={item.selected}
                                value={item.value}
                                bind:group={value}
                                {name} />
                            <label for="{name}-{index}">{item.text}</label>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>
