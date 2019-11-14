/**
 * Calls the callback after the provided timeout, refreshing the timer every dispatch
 * @param {*} timeout
 */
export function debounce(callback, timeout = 1000) {
    let identifier;

    return (...args) => {
        if (identifier) {
            clearTimeout(identifier);
            identifier = null;
        }

        identifier = setTimeout(() => callback(...args), timeout);
    };
}
