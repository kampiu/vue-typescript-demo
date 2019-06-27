<template>
    <div> detail - {{id}}</div>
</template>

<script>
	export default {
		name: "detail",
		data() {
			return {
				id: ''
            }
		},
		components: {},
		beforeRouteEnter: (to, from, next) => {
			next()
		},
		created() {
		},
		methods: {},
		computed: {},
		filters: {},
		watch: {}
	}
</script>

<style scoped>

</style>
