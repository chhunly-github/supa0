<template>
	<div class="container">
		<LayoutHeader />
		<NuxtPage></NuxtPage>
	</div>
</template>

<script setup>
useHead({
	title: 'User Management'
})
// const {data} = await useFetch('/api/profile', {
// 				headers: useRequestHeaders(['cookie'])
// 			});
// console.log('resp', data)
// const user = data.value?.user;
const user = useSupabaseUser();
</script>