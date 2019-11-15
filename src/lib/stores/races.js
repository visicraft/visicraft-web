import {readable} from "svelte/store";

/**
 * Returns a readable Svelte store, with an automatically updating view of the stored Races
 * @param {*} options
 */
export function get_races(options) {
    return readable([], (set) => {
        if (!process.browser) return;

        const {races} = client.datastore;
        const query = races.query_races(options);

        query.$.subscribe(set);
    });
}
