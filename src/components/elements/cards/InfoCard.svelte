<script>
    let _class = "";

    export let color = "";
    export let text = "N/A";
    export let subtext = "N/A";

    export {_class as class};

    $: _color = color ? `bc-${color} c-light` : "";
</script>

<div class="modal {_color} {_class}">
    <h4 class="fw-semibold">{text}</h4>

    <p>{subtext}</p>
</div>
