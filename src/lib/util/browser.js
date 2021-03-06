/**
 * Returns a object<string, string> of the current query parameters of the Browser
 */
export function get_query_string() {
    const search = new URLSearchParams(location.search);
    const ret = {};

    for (const [key, value] of search.entries()) ret[key] = value;
    return ret;
}

/**
 * Returns Sapper preload middleware, skipping the passed in preload function if not running on the Browser
 * @param {*} next
 */
export function preload_browser(next) {
    return function(page, session) {
        if (typeof window === "undefined") return null;

        if (next) return next.apply(this, [page, session]);
        return {};
    };
}

/**
 * Updates the current URL query string of the Browser, with the given object<string, string>
 * @param {*} query_params
 */
export function update_query_string(query_params) {
    let search = new URLSearchParams(location.search);

    for (const key in query_params) {
        const value = query_params[key];

        if (typeof value === "undefined" || value === "") search.delete(key);
        else search.set(key, value.toString());
    }

    search = search.toString();
    const url = search ? `${location.pathname}?${search}` : location.pathname;

    history.replaceState(null, "", url);
}
