<script>
    let _class = "";

    export let items = [];

    export {_class as class};
</script>

{#each items as item}
    <a class="btn btn-text-light {_class}" class:btn-active={item.active} href={item.href}>{item.text}</a>
{/each}
