import {readable} from "svelte/store";

import {get_client} from "../util/visicraft";

/**
 * Returns a readable Svelte store, with an automatically updating view of the stored Races
 * @param {*} options
 */
export function get_races(options) {
    return readable([], (set) => {
        if (!process.browser) return;

        const client = get_client();
        const {races} = client.datastore;
        const query = races.query_races(options);

        query.$.subscribe(set);
    });
}
