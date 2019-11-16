// Third-party assets that need imported for packaging, goes here
import "luda/dist/css/luda-default.min.css";
import "luda/dist/js/luda";

import * as sapper from "@sapper/app";

import "./visicraft.css";

const target = document.querySelector("#sapper");
sapper.start({target});
