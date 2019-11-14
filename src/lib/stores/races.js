import {readable} from "svelte/store";

import {SORTING_DIRECTIONS, SORTING_MODES} from "../util/constants";

/**
 * Returns a readable Svelte store, with an automatically updating view of the stored Races
 * @param {*} sorting_direction
 * @param {*} sorting_mode
 */
export function get_races(sorting_direction, sorting_mode) {
    return readable([], (set) => {
        if (!process.browser) return;

        // We need to dynamically select the direction symbol string based on direction,
        // for RxDB, empty is ascending, minus is decending
        let sorting_symbol;
        if (sorting_direction === SORTING_DIRECTIONS.ascending) sorting_symbol = "";
        else if (sorting_direction === SORTING_DIRECTIONS.decending) sorting_symbol = "-";
        else throw new Error(`bad dispatch to 'get_races' (bad sorting direction ${sorting_direction})`);

        // TODO: support `SORTING_MODES.recent`
        // If we're sorting by recentness, we need to go by update timestamp. If by alphabet,
        // go by title
        let observable = client.datastore.races.find();
        if (sorting_mode === SORTING_MODES.alphabetical) {
            observable = observable.sort(sorting_symbol + "title");
        } else if (sorting_mode === SORTING_MODES.recent) {
            observable = observable.sort(sorting_symbol + "identifier");
        } else throw new Error(`bad dispatch to 'get_races' (bad sorting mode ${sorting_mode})`);

        observable = observable.$.subscribe(set);
    });
}
