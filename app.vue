<template>
	<div class="container">
		<Header></Header>
		<div v-if="user" class="p-3">
			<NuxtPage></NuxtPage>
		</div>
		<Auth v-else />
	</div>
</template>

<script setup>
useHead({
	title: 'User Management'
})
const user = useSupabaseUser()
</script>