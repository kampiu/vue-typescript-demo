<template>
    <div class="header-bar">
        <div class="header-bar-left">
            <slot name="header-left"></slot>
        </div>
        <div class="header-bar-center">
            {{title}}
            <slot name="header-left"></slot>
        </div>
        <div class="header-bar-right">
            <slot name="header-left"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from 'vuex-class';

    export default class HeaderBar extends Vue {
        private name: string = 'HeaderBarComponents';

    }
</script>

<style scoped>

</style>
