// Third-party assets that need imported for packing, goes here
import "luda/dist/css/luda-default.min.css";
import "luda/dist/js/luda";
import "visicraft-lib/dist/visicraft-lib.umd";

import * as sapper from "@sapper/app";

import "./visicraft.css";

const target = document.querySelector("#sapper");
target.innerHTML = "LOADING, PLEASE WAIT...";

(async function() {
    window.client = new visicraft.VisicraftClient({
        datastore: {
            adapter: "memory"
        }
    });

    await client.open_datastore();

    target.innerHTML = "";
    sapper.start({target});
})();
