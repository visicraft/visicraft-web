<style>
    :global(h1.display) {
        padding-top: 0.884rem;
        padding-bottom: 0.116rem;

        font-size: 3rem;
        font-weight: 900;

        line-height: 4rem;
    }

    :global(h2.display) {
        padding-top: 0.884rem;
        padding-bottom: 0.116rem;

        font-size: 2.75rem;
        font-weight: 300;

        line-height: 3.75rem;
    }

    :global(*[class*="vc-symbol-"]) {
        position: relative;
    }

    :global(*[class*="vc-symbol-"]:before),
    :global(*[class*="vc-symbol-"]:after) {
        display: inline;
        position: absolute;

        left: 0;
        top: 15%;

        font-style: normal;
    }

    :global(*[class*="vc-symbol-"]:before) {
        -webkit-text-stroke: 4px black;
    }

    :global(*[class*="vc-symbol-"]:after) {
        font-weight: bold;
    }

    :global(.vc-symbol-race:before) {
        /*content: "&gtcc;";*/
        content: "\02A79";

        transform: rotate(-90deg);
    }

    :global(.vc-symbol-race:after) {
        /*content: "&gtcc;";*/
        content: "\02A79";

        transform: rotate(-90deg);
    }

    :global(.vc-symbol-power:before) {
        /*content: "&gtcc;";*/
        content: "\02AA7";
    }

    :global(.vc-symbol-power:after) {
        /*content: "&gtcc;";*/
        content: "\02AA7";
    }

    :global(.vc-symbol-shopitem:before) {
        /*content: "&gtcc;";*/
        content: "\02A50";
    }

    :global(.vc-symbol-shopitem:after) {
        /*content: "&gtcc;";*/
        content: "\02A50";
    }
</style>

<slot />
