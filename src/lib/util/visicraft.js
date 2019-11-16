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
