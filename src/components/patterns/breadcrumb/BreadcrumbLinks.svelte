<script>
    import BreadcrumbContainer from "./BreadcrumbContainer.svelte";
    import BreadcrumbItem from "./BreadcrumbItem.svelte";

    let _class = "";
    export let style = "";

    export let items = [];

    export {_class as class};
</script>

<BreadcrumbContainer class={_class} {items} {style} let:item>
    <BreadcrumbItem {...item}>{item.text}</BreadcrumbItem>
</BreadcrumbContainer>
