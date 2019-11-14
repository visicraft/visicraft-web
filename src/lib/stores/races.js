import {readable} from "svelte/store";

import {SORTING_DIRECTIONS, SORTING_MODES} from "../util/constants";

/**
 * Returns a readable Svelte store, with an automatically updating view of the stored Races
 * @param {*} sorting_direction
 * @param {*} sorting_mode
 */
export function get_races(sorting_direction, sorting_mode) {
    return readable([], (set) => {
        // We need to dynamically select the direction symbol string based on direction,
        // for RxDB, empty is ascending, minus is decending
        let sorting_symbol = "";
        if (sorting_direction === SORTING_DIRECTIONS.decending) sorting_symbol = "-";

        // TODO: support `SORTING_MODES.recent`
        let observable = client.races;
        if (sorting_mode === SORTING_MODES.alphabetical) observable = observable.sort(sorting_symbol + "title");
        else if (sorting_mode === SORTING_MODES.recent) observable = observable;

        observable = observable.$.subscribe(set);
    });
}
