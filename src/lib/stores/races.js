import {readable, writable} from "svelte/store";

import {debounce} from "../util/animation";
import {get_client} from "../util/visicraft";

/**
 * Returns the given Race data, stripping any fields not allowed to be updated
 * @param {*} data
 */
function get_safe_update(data) {
    return {
        description: data.description,
        summary: data.summary,
        title: data.title
    };
}

/**
 * Returns a writable Svelte Store, that returns a queried Race, changes made to the Store are saved
 * @param {*} identifier
 */
export function get_race(identifier) {
    if (!process.browser || !identifier) return readable(null);

    const client = get_client();
    const {races} = client.datastore;

    // We need the prepare our Race query, and create a wrapper
    // around `query.update` to debounce updates to 100ms
    const query = races.query_race(identifier);
    const _update = debounce((value) => query.update(value), 250);

    const store = writable({_preloading: true});
    const _set = store.set;

    query.$.subscribe((value) => {
        if (value) _set({...value._data, _preloading: false, _no_write: true});
        else _set(null);
    });

    store.set = (value) => _set({...value, _preloading: false, _no_write: false});

    store.subscribe((value) => {
        // If the value is null, or this was an initial set by our subscribed query,
        // ignore the value and skip updating the datastore
        if (value === null || value._preloading || value._no_write) return;

        value = get_safe_update(value);
        _update({$set: {...value}});
    });

    return store;
}

/**
 * Returns a readable Svelte Store, with an automatically updating view of the stored Races
 * @param {*} options
 */
export function get_races(options) {
    if (!process.browser) return readable([]);

    return readable([], (set) => {
        const client = get_client();
        const {races} = client.datastore;
        const query = races.query_races(options);

        query.$.subscribe((value) => {
            set(value);
        });
    });
}
