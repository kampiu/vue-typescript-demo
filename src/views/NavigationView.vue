<template>
    <div class="view-layout">
        <keep-alive>
            <router-view :key="$route.fullPath"/>
        </keep-alive>
        <NavigationBar></NavigationBar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavigationBar from '@/components/NavigationBar.vue';

    @Component({
        components: {
            NavigationBar,
        },
    })
    export default class Views extends Vue {
        private name: string = 'NavigationView';
    }
</script>

<style scoped>

</style>
