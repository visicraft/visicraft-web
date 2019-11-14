/**
 * Represents the various sorting directions supported by the UI
 */
export const SORTING_DIRECTIONS = {
    /**
     * Represents the sorting should happen via ascending, e.g. A-Z
     */
    ascending: "DIRECTION_ASCEND",

    /**
     * Represents the sorting should happen via decending, e.g. Z-A
     */
    decending: "DIRECTION_DECEND"
};

/**
 * Represents the various sorting modes supported by the UI
 */
export const SORTING_MODES = {
    /**
     * Represents that sorting should happen via alphabetically, e.g. A-Z
     */
    alphabetical: "MODE_ALPHABETICAL",

    /**
     * Represents that sorting should happen via an approximation of recentness, e.g. which file was most recently updated
     */
    recent: "MODE_RECENT"
};
