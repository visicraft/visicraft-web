<script context="module">
    import * as sapper from "@sapper/app";

    import {preload_browser} from "../../lib/util/browser";
    import {initialize_client} from "../../lib/util/visicraft";

    export const preload = preload_browser(async (page, session) => {
        // Just a little something for screenshots
        if (typeof page.query.infinite !== "undefined") return new Promise(() => {});

        await initialize_client();

        const return_url = page.query.ret ? page.query.ret : "/editor";
        sapper.goto(return_url, {replaceState: true});

        return null;
    });
</script>

<script>

</script>

<style>
    @keyframes growth-sizing {
        0% {
            transform: scaleX(0.1);
        }

        36.6% {
            transform: scaleX(0.1);
        }

        69.15% {
            transform: scaleX(0.83);
        }

        100% {
            transform: scaleX(0.1);
        }
    }

    .progress {
        padding-left: 15%;
        padding-right: 15%;

        background-color: transparent;
        height: 1rem;
    }

    .progress > div > .progress-bar {
        animation: growth-sizing 2.5s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .progress > div > .progress-bar:nth-child(2) {
        animation-delay: 0.5s;
    }

    .progress > div > .progress-bar:nth-child(3) {
        animation-delay: 0.75s;
    }

    .progress > div > .progress-bar:nth-child(4) {
        animation-delay: 1s;
    }
</style>

<div class="d-flex ai-center min-w-100vw min-h-100vh ta-center c-light bc-dark">
    <div class="w-100">
        <h1 class="display mb-medium">LOADING...</h1>

        <div class="progress">
            <div class="rel w-100 h-100">
                <div class="progress-bar abs-l bc-primary w-100">&nbsp;</div>
                <div class="progress-bar abs-l bc-secondary w-100">&nbsp;</div>
                <div class="progress-bar abs-l bc-danger w-100">&nbsp;</div>
                <div class="progress-bar abs-l bc-light w-100">&nbsp;</div>
            </div>
        </div>
    </div>
</div>
