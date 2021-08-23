<template>
    <div class="dialog-backdrop" @click.self="changeActive()">
        <div class="dialog-container">
            <div class="header">
                header
                <slot  name="headerrrr" /> 
            </div>
            <div class="content">
                <div>Cuộc đời tôi</div>
                <slot />
                <button @click="changeActive()">Xiinh gái BasicDialog</button>
            </div>
            <div class="footer">
                footer
                <slot  name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseDialog",
        props: {
            // active: { type: Boolean, default: true }
        },
        methods: {
            changeActive() {
                this.$emit("cancelssss");
            }
        }
    };
</script>

<style>
    .dialog-backdrop {

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dialog-container {
        max-width: 768px;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        padding: 15px;
        background-color: #fff !important;
    }

    .dialog-enter-active,
    .dialog-leave-active {
        transition: opacity 0.2s;
    }

    .dialog-enter,
    .dialog-leave-to {
        opacity: 0 !important;
    }

    .dialog-enter-active .dialog-container,
    .dialog-leave-active .dialog-container {
        transition: transform 0.4s;
    }

    .dialog-enter .dialog-container,
    .dialog-leave-to .dialog-container {
        transform: scale(0.9);
    }

    .header {
        background-color: yellowgreen !important;
    }

    .content {
        background-color: aquamarine !important;
    }

    .footer {
        background-color: blueviolet !important;
    }
</style>