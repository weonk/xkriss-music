<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "Scroller",
    mounted() {
        var scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
        })
    }
}
</script>

<style>
.wrapper {
    padding: 0 2px 0 2px;
    height: 100px;
}
</style>
