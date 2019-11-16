/**
 * Returns the `visicraft.VisicraftClient` instance singleton, if available, otherwise exception thrown
 */
export function get_client() {
    if (window._vc_client) return window._vc_client;

    throw new Error("bad dispatch to 'get_client' ('window.client' was not available)");
}

/**
 * Initializes a new `visicraft.VisicraftClient` singleton, with the build-time configuration
 */
export async function initialize_client() {
    const client = new visicraft.VisicraftClient({
        datastore: {
            adapter: "memory"
        }
    });

    await client.open_datastore();

    window._vc_client = client;
    return client;
}

if (typeof window !== "undefined") {
    window._debug_init_dummy = () => {
        const {races} = get_client().datastore;

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

        races.bulkInsert(data);
    };
}
