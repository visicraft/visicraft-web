/**
 * Represents the supported content types for indicating
 */
export const CONTENT_TYPES = {
    powers: "TYPE_POWER",
    races: "TYPE_RACE",
    shopitems: "TYPE_SHOPITEM"
};

/**
 * Represents the display names of the different content types
 */
export const CONTENT_DISPLAY_NAMES = {
    [CONTENT_TYPES.powers]: "Power",
    [CONTENT_TYPES.races]: "Race",
    [CONTENT_TYPES.shopitems]: "Shop Item"
};

/**
 * Represents the "pluralized" display names of the different content types
 */
export const CONTENT_PLURAL_NAMES = {
    [CONTENT_TYPES.powers]: "Powers",
    [CONTENT_TYPES.races]: "Races",
    [CONTENT_TYPES.shopitems]: "Shop Items"
};

/**
 * Represents the symbol classes associated with each content type
 */
export const CONTENT_CLASSES = {
    [CONTENT_TYPES.races]: "race",
    [CONTENT_TYPES.powers]: "power",
    [CONTENT_TYPES.shopitems]: "shopitem"
};

/**
 * Represents the color classes associated with each content type
 */
export const CONTENT_COLOR_CLASSES = {
    [CONTENT_TYPES.races]: "primary",
    [CONTENT_TYPES.powers]: "danger",
    [CONTENT_TYPES.shopitems]: "light"
};

/**
 * Returns the display name associated with the content type, throwing an exception missing content types
 */
export function get_content_name(type, plural = false) {
    const lookup = plural ? CONTENT_PLURAL_NAMES : CONTENT_DISPLAY_NAMES;
    const name = lookup[type];

    if (name) return name;
    throw new Error(`bad dispatch to 'get_content_name' (content type '${type}' not supported)`);
}

/**
 * Returns the CSS shape class associated with the content type, throwing an exception missing content types
 */
export function get_content_class(type) {
    const _class = CONTENT_CLASSES[type];

    if (_class === null) return "";
    if (_class) return _class;
    throw new Error(`bad dispatch to 'get_content_symbol_class' (content type '${type}' not supported)`);
}

/**
 * Returns the CSS color class associated with the content type, throwing an exception missing content types
 */
export function get_content_color_class(type) {
    const color = CONTENT_COLOR_CLASSES[type];

    if (color) return color;
    throw new Error(`bad dispatch to 'get_content_color_class' (content type '${type}' not supported)`);
}
