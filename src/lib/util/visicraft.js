import * as sapper from "@sapper/app";

import APPLICATION_CONFIGURATION from "../../../config/application.json";

/**
 * Returns if the `visicraft.VisicraftClient` singleton is available, always false on server
 */
export function has_client() {
    return typeof window !== "undefined" && typeof window._vc_client !== "undefined";
}

/**
 * Returns the `visicraft.VisicraftClient` singleton, if available, otherwise exception thrown
 */
export function get_client() {
    if (window._vc_client) return window._vc_client;

    throw new Error("bad dispatch to 'get_client' ('window._vc_client' was not available)");
}

/**
 * Initializes a new `visicraft.VisicraftClient` singleton, with the build-time configuration
 */
export async function initialize_client() {
    // Server-side Components should wait infinitely
    if (typeof window === "undefined") return new Promise(() => {});
    if (window._vc_client) return window._vc_client;

    const client = new visicraft.VisicraftClient(APPLICATION_CONFIGURATION.client);
    await client.open_datastore();

    window._vc_client = client;
    return client;
}

/**
 * Returns a Sapper preload middleware, that redirects the end-user to the initalization
 * splash screen if no `visicraft.VisicraftClient` singleton was previously available
 * @param {*} next
 */
export function preload_client(next) {
    return function(page, session) {
        if (typeof window !== "undefined" && !has_client()) {
            const url = `/splash/editor?ret=${location.pathname}${location.search}`;
            sapper.goto(url, {replaceState: true});

            return null;
        }

        if (next) next.apply(this, [page, session]);
        return {};
    };
}

if (typeof window !== "undefined") {
    window._debug_init_dummy = async () => {
        const client = get_client();
        const {races} = client.datastore;

        const data = [
            {
                title: "Undead Scourage",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                contributors: ["Tha Pwned"],
                title: "Human Alliance",
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Orcish Horde",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Night Elves",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Blood Mage",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Archmage Proudmore",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Shadow Hunter",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Crypt Lord",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Flame Predator",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Succubus Hunter",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            },
            {
                title: "Chameleon",
                contributors: ["Tha Pwned"],
                description: "I r Description",
                summary: "I r Summary",
                content_type: "TYPE_RACE"
            }
        ];

        const _races = (await races.bulkInsert(data)).success;
        console.log("done bulk", {_races});
    };
}
