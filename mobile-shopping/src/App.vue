<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>

export default {
    created() {
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let htmlDom = document.getElementsByTagName('html')[0];
        let fontSize = htmlWidth / 20;
        fontSize = fontSize > 25 ? 25 : fontSize
        htmlDom.style.fontSize = fontSize + 'px';
    }
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
    font-size: 14px;
}
#nprogress .spinner {
    display: none !important;
}
</style>
