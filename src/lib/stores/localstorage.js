import {writable} from "svelte/store";

/**
 * Returns a writable Svelte Store that updates a `localStorage` key with the `JSON.stringify` value
 * @param {*} key
 * @param {*} default_value
 */
export function bind_localstorage(key, default_value) {
    key = `visicraft-v1:${key}`;

    const value = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : default_value;
    const store = writable(value);

    store.subscribe((value) => {
        if (value === default_value || value === undefined) localStorage.removeItem(key);
        else localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
}
