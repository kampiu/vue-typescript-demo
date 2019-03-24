<template>
	<div class="view-layout">
		<keep-alive>
			<router-view :key="$route.fullPath"/>
		</keep-alive>
		<Tabbar></Tabbar>
	</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Tabbar from '@/index/components/tabbar.vue';

    @Component({
        components: {
            Tabbar
        },
    })
    export default class Views extends Vue {
		name: String = 'Views'
    }
</script>

<style scoped>

</style>
