import {writable} from "svelte/store";

import {get_query_string, update_query_string} from "../util/browser";

/**
 * Returns a writable Svelte Store, that updates the associated query string parameter, whenever the value is updated
 * If the query string parameter is set in the URL when initialized, `default_value` is ignored
 * @param {*} property_name
 * @param {*} default_value
 */
export function bind_query_parameter(property_name, default_value) {
    const params = get_query_string();
    const value = params[property_name] ? params[property_name] : default_value;
    const store = writable(value);

    store.subscribe((value) => {
        if (value === default_value) update_query_string({[property_name]: undefined});
        else update_query_string({[property_name]: value});
    });

    return store;
}
