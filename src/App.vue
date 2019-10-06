<template>
    <keep-alive>
        <router-view :key="$route.fullPath"/>
    </keep-alive>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from "vuex-class";

    const CommonModule = namespace('Common');

    @Component
    export default class App extends Vue {
        @CommonModule.Mutation('INIT_COMMON_ROUTER') INIT_COMMON_ROUTER: Function;

        @Watch('$route.name')
        public onRouterChangeAction(val: string): void {
            this.INIT_COMMON_ROUTER(val);
        }

        private name: string = "App";

        protected mounted(): void{}

    }
</script>
<style lang="less">

</style>
