<style>
    @keyframes ring-rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .vc-loader-spinner {
        display: inline-block;
        position: relative;

        width: 80px;
        height: 80px;
    }

    .vc-loader-spinner div {
        display: block;
        position: absolute;

        width: 64px;
        height: 64px;

        box-sizing: border-box;
        margin: 8px;

        border: 8px solid currentColor;
        border-radius: 50%;
        border-color: currentColor transparent currentColor transparent;

        animation: ring-rotation 2.5s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .vc-loader-spinner div:nth-child(3) {
        animation-delay: 0.75s;
    }

    .vc-loader-spinner div:nth-child(2) {
        animation-delay: 0.5s;
    }

    .vc-loader-spinner div:nth-child(1) {
        animation-delay: 0.25s;
    }
</style>

<div class="vc-loader-spinner">
    <div class="c-secondary" />
    <div class="c-danger" />
    <div class="c-dark" />
    <div class="c-primary" />
</div>
