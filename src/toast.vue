<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"FlyToast",
    mounted() {
        // console.log(this.$toast);
    }

}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: #edf2fc;
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        background: $toast-bg;
        display: flex;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
        transition: opacity .3s,transform .4s,top .4s;
        display: flex;
        box-sizing: border-box;
    }
</style>