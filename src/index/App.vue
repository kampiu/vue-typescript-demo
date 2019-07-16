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

    // const commonModule = namespace('common')

    @Component({
        components: {},
    })
    export default class App extends Vue {
        // @commonModule.Mutation('INIT_ROUTER') INIT_ROUTER: any;
        @Watch('$route.name')
        public onRouterChangeAction(val: string, oldVal: string) {
            // this.INIT_ROUTER(val)
        }

        private name: string = "App";

        protected mounted(): void{}

        public greet(): void{}

    }
</script>
<style lang="less">

</style>
